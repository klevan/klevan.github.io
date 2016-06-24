---
layout: post
title: "An early look at NEON mosquito data"
excerpt: "Hooray, data! Now what do I do?"
tags: [mosquito, disease, NEON data, diversity]
comments: true
image:
  feature: mosquito.png
  credit: Wikimedia Commons
  creditlink: https://commons.wikimedia.org/wiki/File:Mosquito_female.svg
---

# National Ecological Observatory Network
At NEON, we've just released some early mosquito data collected by the observatory in 2014. Although data from just 4 locations is available, this offers a taste of what is to come. I've processed and analyzed some of the data newly available on the [portal](http://data.neonscience.org). These analyses are fully accessible at my [NEON-mosquito-data](//github.com/klevan/NEON-mosquito-data) repository. 

# Summary stats
Currently, NEON has posted mosquito diversity and pathogen data from 4 sites in 2014: Ordway-Swisher Biological Station (OSBS) in Florida, Talledega National Forest (TALL) in Alabama, Central Plains Experimental Range (CPER) in Colorado and North Sterling (STER) in Colorado. At these 4 locations, CO2 traps were deployed monthly (at STER) or biweekly (CPER, TALL, OSBS) to collect mosquitoes over a continuous 40-hour window. This resulted in the collection of some 839 samples from 14,601 hours of collection.

## Diversity and Abundance metrics
In these samples NEON found 40 species and 2 subspecies, representing nearly 21% of the richness present in US and Puerto Rico. At three of the sites, richness seemed to track abundance, as you would expect. The Florida location had an odd reversal of this pattern - early season sampling revealed a rich mosquito community at relatively low abundance and this diversity declined as certain species grew in abundance.
![Species richness tracks abundance - mostly](//klevan.github.io/images/rfigs/NEON_mosquito_abundRich.png)
In the Florida data, this seems largely driven by a switch where *Culex erraticus* represents about a quarter to a third of the mosquito community to becoming almost 80 percent of the mosquitoes in the population.
![Species composition of the 10 most abundant mosquitoes](//klevan.github.io/images/rfigs/NEON_mosquito_spp_comp.png)

## Mosquito infection rate
NEON data reveal the presence of West Nile in Colorado and Eastern Equine in Florida. 
![West Nile in Colorado - CPER](//klevan.github.io/images/rfigs/NEON_mosquito_CPER.png)

![West Nile in Colorado - STER](//klevan.github.io/images/rfigs/NEON_mosquito_STER.png)

![Eastern Equine in Florida](//klevan.github.io/images/rfigs/NEON_mosquito_OSBS.png)