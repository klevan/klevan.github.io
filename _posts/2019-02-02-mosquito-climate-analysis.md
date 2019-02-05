---
title: "NEON Data Visualization: Climate analysis @ HARV"
excerpt: "Mosquito climate model at Harvard Forest"
comments: true
header:
  image: /assets/images/phenology-HARV.png
  caption: "[Photo credit: NEON Phenocam program - photos from the HARV tower](https://www.neonscience.org/data-collection/phenocams)"
---
_Note: an interactive version of this page is available [here](//klevan.github.io/posts/data_viz_1.html)_

# NEON ecosystem assessment - mosquito sampling
The National Ecological Observatory Network (NEON) conducts biweekly or monthly mosquito trapping of all mosquito species over 47 sites in the continental US in conjunction with atmospheric instrumented and remote measurement sampling. One of the sites where sampling has been conducted the longest is our HARV site at [Harvard Forest](https://www.neonscience.org/field-sites/field-sites-map/HARV) in Peterham, Massachusetts.Temperature, humidity and precipitation are all thought to impact mosquito abundance; in this vignette, we can explore the relationship between these abiotic drivers and an observed ecological impact.

![locations of 10 mosquito plots at HARV](//klevan.github.io/assets/images/HARV-site.png)

## Triple aspirated air temperature

At this site, seasonal variation in temperature follows a predictable seasonal pattern.

![Triple aspirated air temperature](//klevan.github.io/assets/images/rfigs/temp-HARV-2017.jpeg)

## Seasonal Precipitation & Humidity

In 2017, precipitation fell primarily in spring and fall, with less accumulation in the summer months. Humidity was extremely variable without any particular pattern.

![Precipitation](//klevan.github.io/assets/images/rfigs/precip-HARV-2017.jpeg)

![Relative Humidity](//klevan.github.io/assets/images/rfigs/RH-HARV-2017.jpeg)

## Mosquito abundance

Mosquitoes have both aquatic and terrestrial life stages, each of which may influenced by local climate conditions. Many mosquito species develop in water during their early life stages (e.g., egg, larval, and pupal), though some species can lay eggs on damp soil and others can survive dessication and rewetting. Mosquito emergence has been shown to be limited by the availability of water and the effects of temperature on egg hatching and development time of the larval and pupal stages. Temperature also appears to play a role in the survival of adult mosquitoes. However, observations of adult  mosquito phenology (such as daily trapping rates) are also be influenced by very short-term weather events (e.g. heavy precipitation, wind) during the trapping period itself, which affect mosquito flight behaviour. 

Here, mosquito activity at HARV in 2017 clearly follows the pattern of seasonal temperature and peaks in the middle of the summer.

![Mosquito activity at HARV in 2017](//klevan.github.io/assets/images/rfigs/mosquito-HARV-2017.jpeg)

## Abiotic drivers of abundance

Climate is an important driver of mosquito abundance and timing, but do temperature, humidity or precipitation data from HARV in 2017 have predictive power to explain variation in mosquito occurrence data?

### Creating a model

Mosquito counts are poisson distributed, so any model used will have to take that distribution into account.

![Data distributions](//klevan.github.io/assets/images/rfigs/distribution-HARV-2017.jpeg)

Given the multicollinearity of the minimum, mean and maximum temperatures, it may be best to start with a model of just one of these factors.

![multicollinear nature of temperature measurements](//klevan.github.io/assets/images/rfigs/multicollinear-HARV-2017.jpeg)

```{r mosquito modelling}
m1 <- glm(formula = totalAbundance ~ avg14TempTripleMean + sum14Precip + avg14RHMean + nlcdClass, 
          data = mos.summary, family = 'poisson')
summary(m1)
```

In this GLM model, there is support that all of these factors (temperature, precipitation, humidity and habitat) are important drivers of total observed abundance. 

![Output of analysis](//klevan.github.io/assets/images/rfigs/glm-HARV-2017.jpg)

![Mosquito vs temperature](//klevan.github.io/assets/images/rfigs/mosq-temp-HARV-2017.jpeg)

The source code for all these graphs are in my repo [neon-data-vignettes](http://github.com/klevan/neon-data-vignettes)
