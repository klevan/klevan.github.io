---
title: "Mosquito climate modelling - HARV 2017 Example"
comments: true
header:
  image: /assets/images/mosquito.png
  caption: "[Photo credit: Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mosquito_female.svg)"
---


```{r setup, include=FALSE}
## STEP 1. Download Relevant NEON data and set up environment
rm(list=ls())
options(stringsAsFactors = F)

## Load Libraries
library(dplyr)
library(shiny)
library(ggplot2)
library(plotly)

# Set working directory
if(file.exists('~/GitHub')){
  setwd('~/GitHub/neon-data-vignettes/data') # Path to repo
}

files = list.files(getwd(), pattern = '.csv') 
files = files[grepl('mos',files)|grepl('wss_',files)]
for (x in files){
  # makes the name of each file
  nm = gsub('\\.csv', '', x)
  # gets the full file path
  l = list.files(getwd(), pattern = '.csv', full.names = T)
  l = l[grepl(nm, l)]
  # read in the csv file and assign the name accordingly
  assign(x = nm, 
         value = read.csv(file = l))
}
rm(nm,l,x,files)

# Create summary table
# Collapse each mosquito collection into one bout per habitat type
mos.summary = unique.data.frame(mos[,c('domainID', 'siteID','eventID','nlcdClass')])
# And get the avg value for each wss variable on a rolling 14 basis
# 14 days = latency between egg and adult
for(i in 1:nrow(mos.summary)){
  eID = mos.summary$eventID[i]
  hab = mos.summary$nlcdClass[i]
  
  mos.summary$startDate[i] = min(mos$date[mos$eventID%in%eID&
                                            mos$nlcdClass%in%hab])
  mos.summary$endDate[i] = max(mos$date[mos$eventID%in%eID&
                                          mos$nlcdClass%in%hab])
  mos.summary$totalAbundance[i] = round(sum(mos$totalAbundance[mos$eventID%in%eID&
                                                                 mos$nlcdClass%in%hab]),0)
  # Get running averages
  mos.summary$avg14TempTripleMean[i] = round(mean(wss_daily_temp$wssTempTripleMean[wss_daily_temp$date>=(as.Date(mos.summary$startDate[i])-14)&
                                             wss_daily_temp$date<=mos.summary$startDate[i]], 
                                                  na.rm = T),2)
  mos.summary$avg14TempTripleMin[i] = round(mean(wss_daily_temp$wssTempTripleMinimum[wss_daily_temp$date>=(as.Date(mos.summary$startDate[i])-14)&
                                             wss_daily_temp$date<=mos.summary$startDate[i]], 
                                                  na.rm = T),2)
  mos.summary$avg14TempTripleMin[i] = round(mean(wss_daily_temp$wssTempTripleMaximum[wss_daily_temp$date>=(as.Date(mos.summary$startDate[i])-14)&
                                             wss_daily_temp$date<=mos.summary$startDate[i]], 
                                                  na.rm = T),2)
  mos.summary$avg14RHMean[i] = round(mean(wss_daily_humid$wssRHMean[wss_daily_humid$date>=(as.Date(mos.summary$startDate[i])-14)&
                                             wss_daily_humid$date<=mos.summary$startDate[i]], 
                                                  na.rm = T),2)
  mos.summary$sum14Precip[i] = round(sum(wss_daily_precip$wssPrecipTotal[wss_daily_precip$date>=(as.Date(mos.summary$startDate[i])-14)&
                                             wss_daily_precip$date<=mos.summary$startDate[i]], 
                                                  na.rm = T),2)
}

# Change out NaNs for NAs
for(col in colnames(mos.summary)[grepl('avg', colnames(mos.summary))|
                                 grepl('sum', colnames(mos.summary))]){
  mos.summary[is.nan(mos.summary[,col]),col] = NA
}

```

# NEON ecosystem assessment - mosquito sampling
The National Ecological Observatory Network (NEON) conducts biweekly or monthly mosquito trapping of all mosquito species over 47 sites in the continental US in conjunction with atmospheric instrumented and remote measurement sampling. One of the sites where sampling has been conducted the longest is our HARV site at [Harvard Forest](https://www.neonscience.org/field-sites/field-sites-map/HARV) in Peterham, Massachusetts.Temperature, humidity and precipitation are all thought to impact mosquito abundance; in this vignette, we can explore the relationship between these abiotic drivers and an observed ecological impact.

## Triple aspirated air temperature

At this site, seasonal variation in temperature follows a predictable seasonal pattern.

```{r temperature variation plot, echo=F, warning=F}
# Set 'date' as the correct class
wss_daily_temp$date = as.Date(wss_daily_temp$date)

# Create triple aspirated temperature plot
p1 <- ggplot(wss_daily_temp, aes(x=date, y=wssTempTripleMean)) + 
                theme_minimal() + 
                geom_point(color = 'gray') +
                geom_smooth(linetype="dashed",method = 'loess',
                            color="darkred", fill="blue") +
                geom_point(aes(x=date, y=wssTempTripleMaximum), 
                           color = 'red') +
                  geom_point(aes(x=date, y=wssTempTripleMinimum), 
                           color = 'blue') 
# Add labels
p1 <- p1 + labs(x = 'Date', y = 'Temperature (C)', 
                main = 'Seasonal Variation in Triple Aspirated Air Temperature
                at HARV in 2017')
# Plot graph
ggplotly(p1)
```

## Seasonal Precipitation & Humidity

In 2017, precipitation fell primarily in spring and fall, with less accumulation in the summer months. Humidity was extremely variable without any particular pattern.

```{r precipitation and RH variation plot, echo=F}
# Set 'date' as the correct class
wss_daily_precip$date = as.Date(wss_daily_precip$date)
wss_daily_humid$date = as.Date(wss_daily_humid$date)

# Create triple aspirated temperature plot
p2 <- ggplot(wss_daily_precip, aes(x=date, y=wssPrecipTotal)) + 
                theme_minimal() + 
                geom_bar(stat = 'identity',color = 'blue') 

# Create humidity plot
p3 <- ggplot(wss_daily_humid, aes(x=date, y=wssRHMean)) + 
                theme_minimal() + 
                geom_point(color = 'gray') +
                geom_point(aes(x=date, y=wssRHMaximum), 
                           color = 'red') +
                  geom_point(aes(x=date, y=wssRHMinimum), 
                           color = 'blue')

# Add labels
p2 <-  p2 + labs(x = 'Date', y = 'Precipitation (mm)', 
                 main = 'Seasonal Variation in Precipitation
                 at HARV in 2017')
p3 <- p3 + labs(x = 'Date', y = 'Relative Humidity', 
                main = 'Seasonal Variation in Humidity
                at HARV in 2017')
# Plot graph
ggplotly(p2)
ggplotly(p3)
```


## Mosquito abundance

Mosquitoes have both aquatic and terrestrial life stages, each of which may influenced by local climate conditions. Many mosquito species develop in water during their early life stages (e.g., egg, larval, and pupal), though some species can lay eggs on damp soil and others can survive dessication and rewetting. Mosquito emergence has been shown to be limited by the availability of water and the effects of temperature on egg hatching and development time of the larval and pupal stages. Temperature also appears to play a role in the survival of adult mosquitoes. However, observations of adult  mosquito phenology (such as daily trapping rates) are also be influenced by very short-term weather events (e.g. heavy precipitation, wind) during the trapping period itself, which affect mosquito flight behaviour. 

Here, mosquito activity at HARV in 2017 clearly follows the pattern of seasonal temperature and peaks in the middle of the summer.

```{r mosquito abundance plot, echo=F}
# Set 'date' as the correct class
mos$date = as.Date(mos$date)

# Create factors for plotting
mos$plotID = as.factor(mos$plotID)
mos$nlcdClass = as.factor(mos$nlcdClass)

# Create mosquito abundance plot
p4 <- ggplot(mos, aes(x=date, y=totalAbundance,
                color=nlcdClass)) + 
                theme_minimal() + 
                geom_point()
p4 <- p4 + labs(color = 'Habitat Type', 
                x = 'Date', y = 'Abundance per sample', 
                main = 'Seasonal Variation in per trap mosquito abundance
                at HARV in 2017')
ggplotly(p4)
```

## Abiotic drivers of abundance

Climate is an important driver of mosquito abundance and timing, but do temperature, humidity or precipitation data from HARV in 2017 have predictive power to explain variation in mosquito occurrence data?

### Creating a model

Mosquito counts are poisson distributed, so any model used will have to take that distribution into account.

```{r mosquito abundance has a poisson distrib, echo=F}
par(mfrow=c(2,2))
h1 <- hist(mos$totalAbundance, col = 'lightblue', border = T, 
           main = 'Poisson Distributed Mosquito data', 
           xlab = 'Total Abundance per trap')
h2 <- hist(mos$wssPrecipTotal, col = 'blue', border = T, 
           main = 'Poisson Distributed Precipitation data', 
           xlab = 'Precipitation (mm)')
h3 <- hist(mos$wssTempTripleMean, col = 'gray', border = T, 
           main = 'Bimodal temperature data', 
           xlab = 'Temperature (C)')
h4 <- hist(mos$wssRHMean, col = 'red', border = T, 
           main = 'Poisson Distributed RH data', 
           xlab = 'Relative Humidity')

```

Given the multicollinearity of the minimum, mean and maximum temperatures, it may be best to start with a model of just one of these factors.

```{r multicollinearity, echo=F}
par(mfrow=c(1,2))
h1 <- plot(wss_daily_temp$wssTempTripleMean, 
           wss_daily_temp$wssTempTripleMaximum,
           bg = 'red', pch = 21, 
           xlab = 'Mean Triple Aspirated Temperature (C)',
           ylab = 'Max Triple Aspirated Temperature (C)')
h2 <- plot(wss_daily_temp$wssTempTripleMean, 
           wss_daily_temp$wssTempTripleMinimum,
           bg = 'lightblue', pch = 21, 
           xlab = 'Mean Triple Aspirated Temperature (C)',
           ylab = 'Min Triple Aspirated Temperature (C)')

```

```{r mosquito modelling}
m1 <- glm(formula = totalAbundance ~ avg14TempTripleMean + sum14Precip + avg14RHMean + nlcdClass, 
          data = mos.summary, family = 'poisson')
summary(m1)
```

In this GLM model, there is support that all of these factors (temperature, precipitation, humidity and habitat) are important drivers of total observed abundance. 

```{r mosquito abundance per condition, echo=F}
# Set 'date' as the correct class
mos.summary$endDate = as.Date(mos.summary$endDate)

# Create factors for plotting
mos.summary$nlcdClass = as.factor(mos.summary$nlcdClass)

# Create mosquito abundance plot
p5 <- ggplot(mos.summary, 
             aes(x=avg14TempTripleMean, y=totalAbundance,
                color=nlcdClass)) + 
                theme_minimal() + 
                geom_point() + 
                ylim(0,max(mos.summary$totalAbundance))
  
p5 <- p5 + labs(color = 'Habitat Type', 
                x = 'Average Mean 14-running Temperature (C)', y = 'Total Abundance per habitat', 
                main = 'Effect of temperature on per trap mosquito abundance
                at HARV in 2017')
ggplotly(p5)
```
