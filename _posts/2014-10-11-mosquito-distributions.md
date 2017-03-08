---
title: "Mosquito Distributions"
excerpt: "A demo showing how to use publicly available presence-comments: true
header:
  image: /assets/images/mosquito.png
  caption: "[Photo credit: Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mosquito_female.svg)"
---


When he made the statement, former Secretary of Defense Donald Rumsfeld was trying to dodge a reporter’s question. Since then his quote about ‘known knowns’ has transformed into a kind of watchword for any epistemiological problem.

*[…] there are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns — the ones we don’t know we don’t know. And if one looks throughout the history of our country and other free countries, it is the latter category that tend to be the difficult ones.*

In ecology, there is plenty of data illustrating problems we face: climate change, invasive species, pernicious drought. The trouble with much of our data is that techniques can vary substantially between lab groups such that pooling the data together becomes technically difficult. Our data leave us no doubt that temperatures will rise and rainfall patterns will change the landscape–but we really don’t have great ways of extrapolating data to areas we didn’t sample or conditions we haven’t tested. 
That’s why I love finding datasets where someone has collated information in a semi-standardized way across a large area. The Center of Vector Biology at Rutgers collated a list of species distributions of mosquitos across the state. With this information you can figure out the mosquito richness (number of species found in each county) in the state:
![](//klevan.github.io/assets/images/rfigs/mosquitoMap1.png)

as well as a standard metric of species diversity:
![](//klevan.github.io/assets/images/rfigs/mosquitoMap2.png)

By cross-referencing the list of species in each county with a list of species known to carry West Nile, you could actually figure out which locations might have the highest saturation of West Nile virus.

![](//klevan.github.io/assets/images/rfigs/mosquitoMap3.png)

In this map, it looks like tiny Hudson county is the most dangerous area for West Nile. However, presence/absence data obviously has some serious limitations–with these data there is no way to know how many mosquitos are present in a given spot in New Jersey. We only know what species were found where. The latest data from the [New Jersey Department of Health](http://www.state.nj.us/health/cd/westnile/documents/results_sept12_14.pdf) seems to indicate that of the many pools tested statewide, Hudson only had about 10% of the West Nile positive pools (61/491). You would be much better off staying away from breeding pools in Bergen county since they have the most West Nile positive mosquitoes (109/491).
One day, we may have data sets that are fine grain (on the scale of km instead of counties) and across a broad scale. In some countries, there is already work to do just that. Maybe then you’ll have fine scale information about just where not to vacation if you are concerned about mosquitoes. Until then, I hear that Iceland doesn’t have any mosquito problems.

If you are interesting in replicating any of this, the source code is posted on my [github](https://github.com/klevan/mosquito_project).
