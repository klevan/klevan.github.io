---
layout: post
title: "Tiger Beetle Distributions"
excerpt: "Diversity analysis using USGS Data"
comments: true
image:
  feature: tigerBeetle.jpg
  credit: Wikimedia Commons
  creditlink: https://upload.wikimedia.org/wikipedia/commons/d/d1/Clivina_fossor_bl.jpg
---

The USGS has a great resource where they have compiled species checklists (such as they exist) for a really charismatic group of beetles. They even have a great name (clearly the taxonomist doing the naming decided to be a PR rep for this group): the Tiger Beetles.
 
![Oklahoman tiger beetles](//klevan.github.io/images/rfigs/tigerBeetles.png)

They are a beautiful bunch, right? It’s not hard to see why they have a huge following. Unfortunately, while the USGS site is set up to easily find a local checklist for your county (if it exists), it’s super hard to extract data out of if you are interested in nationwide Tiger beetle diversity. Luckily, with a few easy lines of code in R using the rvest and maps packages you can easily scrape the USGS page and make a beautiful map like the one below, see [here](https://github.com/klevan/tiger-beetles).

![Richness map](//klevan.github.io/images/rfigs/tigerBeetlesMap1.png) 

As you can see, North Dakota, Texas, Colorado and Arizona have some fantastically rich Tiger beetle communities with more than 30% of the species nationwide in representation according to USGS checklists.
