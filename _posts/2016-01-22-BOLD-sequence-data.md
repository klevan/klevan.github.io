---
layout: post
title: "NEON data on the BOLD"
excerpt: "A short script that plays well with the Barcode of Life API"
tags: [web-scraping, BOLD, NEON, API]
comments: true
image:
  feature: dna.jpg
  credit: DNA Art Online
  creditlink: https://www.flickr.com/photos/geneticdesigns/5074826281
---

# BOLD: awesome resource, finicky API
The National Ecological Observatory Network (NEON) has DNA sequence data hosted on the Barcode of Life website. The records available include metadata about collection, spatial-temporal data of captured specimens, DNA sequence from the specimen, and (often) even photos!
There is an API maintained by BOLD that allows programatic access. Scott Chamberlain made an R package (called 'bold') that makes interacting with this API even easier. However, the R package doesn't directly help you download photos associated with specimen records. 
As a result, I created a short script that will download the photos from BOLD for any specimen of interest. The Rscript is available [here](//klevan/carabid-workshop/code/neon-BOLD-data.R).

## Step 1: Create your directory location
If you wanted the photos to appear in a folder on your desktop, you can put in the file path and then create that directory:
    dirLocation <- '~/Desktop/NEONphotos' 
    dir.create(dirLocation)

## Step 2: Load your libraries
Only two packages are needed beyond the standard suite of R libraries.
    library(XML)
    library(bold)

## Step 3: Get specimen data from BOLD using Scott's awesome 'bold' package
I was interested in a data frame that contained all the NEON uploaded specimens.
    allNEONspecimens <- bold_specimens(institutions = "National Ecological Observatory Network, United States")
If you were interested in in all specimens from a particular country or of a particular species, that's just as easy to find.
    bold_specimens(taxon = "Apis mellifera")
    bold_specimens(geo = "California",taxon = "Apis mellifera")

## Step 4: Get the image url associated with each specimen
Scott's package gives you the spatial and temporal metadata associated with a record. To find the image, you first need to know the processID (unique to each specimen) and add it to the url below.
    specimenPage <- "http://www.boldsystems.org/index.php/Public_RecordView?processid="
From there, grabbing images is a snap.
    noImages <- vector() # A container for image grab failures
    for(i in 1:dim(allNEONspecimens)[1]){
      tmp <- try(query <- getNodeSet(htmlParse(paste0(specimenPage,allNEONspecimens$processid[i]),encoding = "UTF-8"),"//img"))
      if (class(tmp)=="try-error"){
        noImages <- c(noImages,allNEONspecimens$processid[i])
      } else {
        a <- unlist(sapply(query,xmlToList)) # parse the data return
        if(length(as.character(a[grepl("http://www.boldsystems.org/pics/",a)]))>0){
          allNEONspecimens$image_urls[i] <- as.character(a[grepl("http://www.boldsystems.org/pics/",a)]) # choose the correct photo  
        } else{
          noImages <- c(noImages,allNEONspecimens$processid[i])
        }
      }
    }
Then, I personally appreciate the occasional nice message that tells me when my scripts fail.
    if (length(noImages)>0){
      print("Sorry. No images available for",paste(noImages, collapse = " "))
    }

## Step 5: Download the images!! 
This is a solution for a Windows environment. YMMV, as they say.
All that is left is to subset your data to the extent you have any image available.
    allImages <- allNEONspecimens[is.na(allNEONspecimens$image_urls)==FALSE,c("processid","image_urls")]
And download!!
    for (i in allImages$image_urls){
      download.file(url=i,destfile = paste(dirLocation,paste0(basename(allImages$processid[match(i,allImages$image_urls)]),".jpg"),sep="/"), mode = 'wb')
    }

}
