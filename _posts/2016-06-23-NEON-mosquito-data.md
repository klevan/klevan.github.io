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

# National Ecological Observatory Network: mosquito data
At NEON, we've just released some early mosquito data collected by the observatory in 2014. Although data from just 4 locations is available, this offers a taste of what is to come. I've processed and analyzed some of the data newly available on the [portal](http://data.neonscience.org). These analyses are fully accessible at my [NEON-mosquito-data](//github.com/klevan/NEON-mosquito-data) repository. 

# Summary stats
Currently, NEON has posted mosquito diversity and pathogen data from 4 sites in 2014: Ordway-Swisher Biological Station (OSBS) in Florida, Talledega National Forest (TALL) in Alabama, Central Plains Experimental Range (CPER) in Colorado and North Sterling (STER) in Colorado. At these 4 locations, CO2 traps were deployed monthly (at STER) or biweekly (CPER, TALL, OSBS) to collect mosquitoes over a continuous 40-hour window. This resulted in the collection of some 839 samples from 14,601 hours of collection.

## Diversity and Abundance metrics
In these samples NEON found 40 species and 2 subspecies, representing nearly 21% of the richness present in US and Puerto Rico. At three of the sites, richness seemed to track abundance, as you would expect. The Florida location had an odd reversal of this pattern - early season sampling revealed a rich mosquito community at relatively low abundance and this diversity declined as certain species grew in abundance.
![Species richness tracks abundance - mostly](//klevan.github.io/images/rfigs/NEON_mosquito_abundRich.png)
In the Florida data, this seems largely driven by a switch where *Culex erraticus* (color = blue) represents initially about a quarter to a third of the mosquito community and becomes almost 80 percent of the mosquitoes in the population.
![Species composition of the 10 most abundant mosquitoes](//klevan.github.io/images/rfigs/NEON_mosquito_spp_comp.png)

## Mosquito infection rate
NEON data also reveal the presence of West Nile in Colorado and Eastern Equine in Florida. NEON is prioritizing the testing of important vector species such as *Aedes aegypti*, *Aedes albopictus*, *Culex tarsalis*, *Culex pipiens* and *Aedes triseriatus*. Depending on species composition and budget, other species may also be tested. In 2014, NEON tested 26,715 mosquitoes (583 pathogen pools) from 8 species.

| Species  | Number captured | Number tested |
| ------------- | :-------------: | :------------: |
| Aedes canadensis | 2278 | 2110 |
| Aedes dorsalis | 3554 | 2345 |
| Aedes vexans | 426 | 420 |
| Coquillettidia perturbans | 40,021 | 8700 |
| Culex erraticus | 104,727 | 6410 |
| Culex nigripalpus | 7181 | 2230 |
| Culex salinarius | 2011 | 1360 |
| Culex tarsalis | 4491 | 3140 |

These eight species received the testing that they did, in large part because of their relative availability for testing. But as nationwide trapping is implemented, the 5 species I mentioned up top will be prioritized.

### West Nile in Colorado
In Colorado, *Culex tarsalis* was the primary vector of West Nile that NEON detected, which makes sense - *C. tarsalis* is one of the three major carriers of West Nile. However, at least one *Aedes dorsalis* mosquito was found carrying the pathogen as well, a hint that the data that NEON puts out in the future may provide insight into how other non-primary vectors broaden the pool of available carriers as more sites come online. 

![West Nile in Colorado - CPER](//klevan.github.io/images/rfigs/NEON_mosquito_CPER.png)

![West Nile in Colorado - STER](//klevan.github.io/images/rfigs/NEON_mosquito_STER.png)

### Eastern Equine in Florida
NEON's collection efforts turned up evidence of Eastern Equine Encephalitis virus (EEEV) in *Coquillettidia perturbans*. The CDC + USGS build maps of [mosquito vector status](http://diseasemaps.usgs.gov/mapviewer/). In 2014, cases of EEEV in mosquitoes were sparse (present in just 29 counties in the US) and in humans even more infrequent (only 8 confirmed cases). Because much of this data is collated by haphazard sampling by different entities, the resolution is coarse and often incomplete. For that reason, it's not surprising that NEON detected EEEV in Florida, where the CDC failed to detect any cases. 

![Eastern Equine in Florida](//klevan.github.io/images/rfigs/NEON_mosquito_OSBS.png)

The primary enzootic vector of EEEV is *Culiseta melanura* in the U.S. According to the [CDC](http://www.cdc.gov/ncezid/dvbd/pdf/arboguid_508.pdf), the infection rate in Florida for this species over a 20-year period was about 0.55 per 1,000. By comparison, the minimum field infection rate (MFIR) for *Coquillettidia perturbans* is 0.03 per 1,000 mosquitoes. *Coquillettidia perturbans* is thus not the primary vector of EEEV, but given that *Culiseta melanura* comprise only ~2% of the mosquito community at Ordway-Swisher Biological Station in 2014, *Coquillettidia perturbans* seems to be a reservoir of the pathogen in a low *C. melanura* year. 

NEON data are interesting because they will provide support for some of the outstanding questions identified by the CDC. Once more data are available, we can finally explore which mosquito species are involved in EEEV transmission in different regions of the country. We will also gain a better sense of the role of *Aedes albopictus* (an introduced species) in occurrence of EEEV.

## Mosquito composition and pathogen status
The detection of a pathogen coincided with seasonal peak mosquito abundance in Colorado, but not in Florida, suggesting that having more mosquitoes around generally did not reveal greater pathogen-levels *per se*. Digging in to the species composition data, however, revealed some commonalities at these 3 sites. In Colorado, pathogen detection occurred when *Culex tarsalis* (the most effective vector of West Nile) was also the most dominant species in the community. In Florida, *Coquillettidia perturbans* tested positive for Eastern Equine just when it was the dominant player in the ecosystem (seasonal high of 42% of the community!). This suggests that when the pool of mosquitoes that can vector a pathogen exceeds a certain threshold, the pathogen can become widespread enough in that population that it becomes detectable. 

### Extensions: Climate shifts & pathogen risk
As more data are released, it will be interesting to see how climate affects pathogen-levels in these mosquito populations. It is known that rainfall patterns are associated with EEEV [^1]; precipitation more than 20 cm above the average occurring over 2 consecutive years can produce favorable conditions for an outbreak. [An unusually wet fall is probably conducive to successful overwintering of *Culiseta melanura* larvae, and a wet spring facilitates rapid buildup of vector populations](http://www.cdc.gov/ncezid/dvbd/pdf/arboguid_508.pdf).  

### Extensions: Birds as viral hosts
NEON is also collecting bird data at NEON sites and these data may reveal connections between bird communities and mosquito pathogen-status. EEEV activity is most intense in bird populations associated with fresh-water swamp forest habitats; this includes species such as thrushes, cardinals, red-winged blackbirds, sparrows, bluejays, chickadees and woodpeckers. Given this data it will be interesting to see if we can begin to understand which bird species are particularly important vectors in EEE virus amplification.

[^1]:  Grady, G.F. *et al* 1978. Am. J. Epidemiol. 107:170-178. 
