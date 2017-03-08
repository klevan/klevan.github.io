---
title: "Rocky Mountain National Park - A camping trip"
excerpt: "Just how early do I have to get that permit?"
comments: true
header:
  image: /assets/images/bearlake.JPG
  caption: "[Photo credit: Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/1/1a/Rocky_Mountain_National_Park_in_September_2011_-_Bear_Lake_looking_toward_Glacier_Gorge.JPG)"
---

# Backpacking season is here!
It's summertime in the Front Range and that means camping season has begun. I love hiking in to a backcountry site (dispersed, assigned--doesn't matter) and getting away from the crowds. This becomes especially difficult to pull off because so many people in the Denver area *also* love the outdoors. The result can be an experience with significantly less solitude than one might expect. 
Possibly the worst experience is when you've just schlepped 20 or 30 pounds of camping gear up the trail (possibly 3 or 4 miles in) and someone runs frenetically past you on your route with only a pair of trailrunners and possibly a water bottle. For me, it just puts a bit of a damper on that feeling of accomplishment (5 miles! And we're making great time!) when someone is able to just fly past you in a pair of sneakers. 
For that reason, we've become interested in finding places that are a little less accessible and retain that private outdoors experience. 

## Rocky Mountain National Park = a good getaway?
Rocky Mountain has 115 Backcountry locations; each of which have 1 to 5 designated camping sites. Some sites are relatively close to civilization (the Sprague Lake Accessible Site is only 0.5 miles from a trailhead), whereas others offer a bit more distance between you and the madding crowd (Stormy Peaks is 11 miles removed from its trailhead). Most sites have a max capacity of 7, some group sites allow up to 12 people, and a select number are stock sites (people can bring horses, llamas, etc.).
All backcountry reservations officially go on sale at 8 AM on March 1. This year, we successfully acquired permits for early season camping in Wild Basin, a Saturday permit in July for Glacier Gorge and a few permits over the Labor Day weekend for a 30 mile loop. When we obtained the permits, I initially felt pretty superior (early bird gets the worm!) - but was that warranted? Peter ([@pstjohn](//github.com/pstjohn/rmnp_data_extraction)) and I decided to look into the availability data that Rocky Mountain provides to get a sense if that early morning planning was really necessary. 

# Analyzing RMNP
Unfortunately, RMNP posts date availability as a pdf and as a report of current availability. The fact that this data is bound up in a pdf certainly hinders our analysis of it (c'mon Rocky, get with the program and release csv files!), but this is a surmountable problem. That they only report instantaneous availability, hinders our ability to look at these trends through time. Next year, Peter and I will have to cache the reports on a daily or weekly basis if we want a better picture of how reservation selection evolves through the season. 
Still, mid-June is still early in the season and people are not allowed to reserve backcountry sites more than 5 days ahead of time after a certain date (I believe that is in April or May?). So this June 9 report has a somewhat accurate snapshot of which sites people reserve in advance from June 14 to Oct 29. 

## What dates are most coveted?
The date with the least availability (only 15 spots in the whole park remaining!) is the Saturday night of 4th of July weekend (7/2). This is not surprising, especially with the Fourth occuring on a Monday. The next most popular dates are both Saturday reservations in July (7/16 and 7/23), followed by Sunday night of the Fourth of July weekend (7/3). In general, mid July to early August is prime time for backpacking in RMNP.
![When people want to be backpacking in Rocky](//klevan.github.io/assets/images/rfigs/rmnp_datedesirability.png)
This is probably related to the elevation and snow pack in the park, which tends to thin out by July. Higher elevation sites hang on to their snow later into the season, but all sites are accessible by mid-July.
![When is the snowpack gone?](//klevan.github.io/assets/images/rfigs/rmnp_snowfree_dates.jpeg)
Also not surprising, Friday and Saturday are the most popular days of the week to make a reservation. 
![Everyone has fun on the weekend](//klevan.github.io/assets/images/rfigs/rmnp_dayoftheweek.png)

# Site desirability
In general, the southern areas appear to be snapped up quickly, with the 5 most popular locations (in order) being Glacier Gorge, Andrews Creek, Thunder Lake, Ouzel Lake, and Upper Ouzel Creek. In the map below, the diameter of the red dot scales with the proportion of days that site is reserved in advance. The five most popular sites are indicated in blue. 
![No one chooses the Northern backcountry sites](//klevan.github.io/assets/images/rfigs/rmnp_mapofdesirability.png)

## Factors that are *not* related to desirability
Several factors had no effect on the likelihood of people to reserve a particular campsite location in advance. The distance hiked up the trail to get to the site, the elevation of the site, and the elevation gain were all irrelevant in an evaluation of site desirability. Locations that are clear of snow early in the season are not more desirable than sites that stay snowy longer (no surprise there, since elevation didn't matter and the 'snow-free' date is tightly correlated to elevation). Locations with privies are not more popular than those without. 
