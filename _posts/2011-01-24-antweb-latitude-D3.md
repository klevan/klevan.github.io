---
layout: D3-post
title: "Exploring ant biodiversity"
excerpt: "Looking at data from AntWeb.org"
tags: [ant, biodiversity, latitude, richness]
comments: true
image:
  feature: rainforest.jpg
  credit: Wikimedia Commons
  creditlink: https://commons.wikimedia.org/wiki/File:El_Yunque_panorama.jpg
---

## Exploring patterns of ant occurrence data in AntWeb
Ants are a diverse group with representation in most parts of the globe. I'm interested in using the [AntWeb.org](http://www.antweb.org) API to explore ant populations. My repo at [klevan/antweb](//github.com/klevan/antweb) has the scripts and data summarized in this post. I used `library(XML)`, `library(AntWeb)`, `library(geojsonio)`, `library(dplyr)` and `library(maps)`.

## AntWeb is huge!
As of January 2016, Ant Web has 548,926 specimen records describing the occurrence of 16,223 species/subspecies. In a first pass with their API, I downloaded 318,527 occurrence records on 9,884 species (~ two-thirds of the data).

    map(database = "world")
    points(antData$decimal_longitude,antData$decimal_latitude,
           pch=21,bg="turquoise")

![Each point is an ant occurrence record](//klevan.github.io/images/rfigs/antwebMap1.png)
From the distribution of recorded ant sightings, there are some obvious gaps in parts of Asia, equitorial Africa, and the Amazon.

Looked at another way, there is a clear positive relationship between documented ant species richness and proximity to the equator. This is a relationship that shows up again and again in ecology.

    antData <- antData[is.na(antData$decimal_latitude)==FALSE,]
    lat <- seq(from=min(antData$decimal_latitude),
               to=max(antData$decimal_latitude),by=1) 
    x <- vector()
    for (i in lat){
      antData %>% 
        filter(decimal_latitude>=i,decimal_latitude<i+1)-> a
      a <- data.frame(latitude=i,
                      numSpecies=length(unique(a$scientific_name)))
      x <- rbind(x,a)
    }
    x$latitude <- abs(x$latitude)
    plot(x$latitude,x$numSpecies,
         xlab="|Distance from the equator in Degrees Latitude|",
         ylab="Number of Ant Species",pch=21,bg="indianred")
         
    # Adding the curve
    mod <- glm(x$numSpecies~x$latitude,family = poisson)
    x$fit <- as.numeric(mod$fitted.values)
    lines(x$latitude,x$fit,lwd=4)

![Number of ant species per degree latitude](//klevan.github.io/images/rfigs/antwebLatGraph.png)

This is pretty much a textbook case of the species-latitudinal gradient. 

<script>

var width = 960,
    height = 960;

var projection = d3.geo.stereographic()
    .scale(245)
    .translate([width / 2, height / 2])
    .rotate([-20, 0])
    .clipAngle(180 - 1e-4)
    .clipExtent([[0, 0], [width, height]])
    .precision(.1);

var path = d3.geo.path()
    .projection(projection);

var graticule = d3.geo.graticule();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

d3.json("//klevan.github.io/d3scripts/world-50m.json", function(error, world) {
  if (error) throw error;

  svg.insert("path", ".graticule")
      .datum(topojson.feature(world, world.objects.land))
      .attr("class", "land")
      .attr("d", path);

  svg.insert("path", ".graticule")
      .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
      .attr("class", "boundary")
      .attr("d", path);
});

d3.select(self.frameElement).style("height", height + "px");

</script>
