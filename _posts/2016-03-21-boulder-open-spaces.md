---
title: "The Affordability of Open Space"
excerpt: "Can you buy a house with decent access to the Flatirons?"
comments: true
header:
  image: /assets/images/flatirons.jpg
  caption: "[Photo credit: Zach Ancell](https://www.flickr.com/photos/zachancell/3682237473)"
---

# Boulder & Open Space Access
I work in the Boulder, Colorado area. It is a beautiful locale and the community as a whole really values its open space. The fact that my co-workers joke about the cost-of-living penalty of living close the flatiron mountains highlights just how desirable access to the outdoors is for this area. Because Boulder participates in the [Open Data movement](https://bouldercolorado.gov/open-data), I decided to look into this phenomenon a little more closely. 

# Getting data from the city
Data for this post come from two sources: the [Boulder Open Data Catalog](https://bouldercolorado.gov/open-data/boulder-addresses/) and the [Zillow API](http://www.zillow.com/howto/api/GetZestimate.htm). From the Boulder Catalog, I downloaded the .dbf and .shp files associated with all Boulder addresses. From Zillow, I used the Zillow API library in R, which makes it simple to use the API programatically; see `r install.package("Zillow")`. To use the API, you will need a zillow ID. Zillow uses this identifier to limit the number of calls you make to their servers. Boulder has ~50,000 addresses. To get price data associated with these addresses, I had to use a try block and do the procedure repeatedly. Zillow does have a mechanism to increase the number of queries you can make each day, but I was told that they don't lift that cap for data viz projects. 

# Harvesting price data from Zillow
I've set up some try blocks that will periodically try to harvest housing market data on addresses for which I don't have information yet. In my experience, Zillow will let me do about 2500 calls to their API before they shut me down for a while. So far, I've gotten some price information for about half the properties in the city.

# The cost of housing
From the get-go, median home price ($602,360) and mean home price ($694,148) for the city of Boulder is pretty expensive and it's easy to understand why many people are priced out entirely. I've heard that 100k people *live* in the city of Boulder, but about as many commute in from elsewhere every weekday just because it's gotten less affordable. The data I gathered indicates that only about 37% of the properties are valued at less than $500k; which to me is the price point at which housing is no longer 'affordable'.

However, there is considerable variance by location and certain neighborhoods are pricier than others. The most expensive areas are plotted in green, the least expensive properties are plotted in red. 

![alt text](//klevan.github.io/assets/images/rfigs/boulderOpenDataMap1.jpeg "neighborhood pricing")

From this plot, the priciest areas appear to be in the Pearl Street/Mapleton Hill neighborhoods and the South Table Mesa neighborhood; this is also where the greatest concentration of houses over a million dollars are located. Likewise, areas with the most red are concentrated in Gunbarrel and around Valmont Rd in Northeast Boulder (also called 'the Crossroads'). That's also where you are most likely to find a property valued at less that a quarter million dollars.

# Mapping the community
How is the price of housing related to the proximity of open space or green space? First, I wanted to get a sense visually of the open space within Boulder.
![alt text](//klevan.github.io/assets/images/rfigs/boulderOpenDataMap2.jpeg "where are the trees?")
The contour map (in green) tells you something about the distribution of trees managed by the city. Again, it seems as though lot of the trees (at least those tracked by the city) are in the Mapleton Hill neighborhood, a historic and very expensive area.
Green space isn't just tree-lined streets, though. So I mapped out the open space parcels owned by the City of Boulder in brown.
![alt text](//klevan.github.io/assets/images/rfigs/boulderOpenDataMap3.jpeg "trees and open space")
A lot of the land owned by [Open Space and Mountain Parks](https://bouldercolorado.gov/osmp) is located further from Mapleton and the tonier parts of town than I would have expected. Even so, not all of the space owned and controlled by OSMP is accessible to the public. While I certainly appreciate being able to look at a pristine vista, the real pleasure is in exploring it. In the map below, I've greyed out the parcels where public access is restricted and overlaid trails where they occur.
![alt text](//klevan.github.io/assets/images/rfigs/boulderOpenDataMap4.jpeg "trees and accessible open space")
My favorite portion of the land owned by OSMP is in what's called the [West Trail Study Area](https://www-static.bouldercolorado.gov/docs/trails-study-areas-map-1-201304101255.pdf) and contains all the trails over the Flatirons. 
![alt text](//klevan.github.io/assets/images/rfigs/boulderOpenDataMap5.jpeg "Open space & the Flatirons")

In the figure above, you can see that the neighborhoods closest to the West Trail Study Area (i.e., the FlatIrons) are more expensive than those areas further away. In fact, the median home price within the Crossroads (the darkest colored blue polygon), is a full $100k cheaper than the median price in the most expensive areas (i.e., Central Boulder - contains the Pearl Street Mall). 

# Can you afford to buy in the Flat Irons?
Maybe, but most likely not. Only a third of the properties in Central Boulder or South Boulder are valued at less than $500k. With the cost of living and cost of housing increasing at the rate that it is, it seems like the trend will increasingly be to drive to the trailhead rather than to walk to it.