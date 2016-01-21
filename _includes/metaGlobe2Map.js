var mapWidth = 960,
mapHeight = 500,
focused = false,
ortho = true, 
speed = -7e-3,
start = Date.now(),
corr = 0;

var projectionGlobe = d3.geo.orthographic()
.scale(240)
.translate([mapWidth / 2, mapHeight / 2])
.clipAngle(90);

var projectionMap = d3.geo.equirectangular()
.scale(145)
.translate([mapWidth / 2, mapHeight / 2])

var projection = projectionGlobe;

var path = d3.geo.path()
.projection(projection);

var svgMap = d3.select("div#map").append("svg")
.attr("overflow", "hidden")
.attr("width", mapWidth)
.attr("height", mapHeight);

var zoneTooltip = d3.select("div#map").append("div").attr("class", "zoneTooltip"),
infoLabel = d3.select("div#map").append("div").attr("class", "infoLabel");

var g = svgMap.append("g");

//Starter for function AFTER All transitions

function endall(transition, callback) { 
  var n = 0; 
  transition 
  .each(function() { ++n; }) 
  .each("end", function() { if (!--n) callback.apply(this, arguments); }); 
}

//Loading data

queue()
.defer(d3.json, "/d/5685937/world-110m.json")
.defer(d3.tsv, "/d/5685937/world-110m-country-names.tsv")
.await(ready);


function ready(error, world, countryData) {

  var countryById = {},
  countries = topojson.feature(world, world.objects.countries).features;

  //Adding countries by name

  countryData.forEach(function(d) {
    countryById[d.id] = d.name;
  });

  //Drawing countries on the globe

  var world = g.selectAll("path").data(countries);
  world.enter().append("path")
  .attr("class", "mapData")
  .attr("d", path)
  .classed("ortho", ortho = true);

  //Events processing

  world.on("mouseover", function(d) {
    if (ortho === true) {
      infoLabel.text(countryById[d.id])
      .style("display", "inline");
    } else {
      zoneTooltip.text(countryById[d.id])
      .style("left", (d3.event.pageX + 7) + "px")
      .style("top", (d3.event.pageY - 15) + "px")
      .style("display", "block");
    }
  })
  .on("mouseout", function(d) {
    if (ortho === true) {
      infoLabel.style("display", "none");
    } else {
      zoneTooltip.style("display", "none");
    }
  })
  .on("mousemove", function() {
    if (ortho === false) {
      zoneTooltip.style("left", (d3.event.pageX + 7) + "px")
      .style("top", (d3.event.pageY - 15) + "px");
    }
  })
  .on("click", function(d) {
    if (focused === d) return reset();
    g.selectAll(".focused").classed("focused", false);
    d3.select(this).classed("focused", focused = d);
    infoLabel.text(countryById[d.id])
    .style("display", "inline");

    //Transforming Globe to Map

    if (ortho === true) {
      corr = projection.rotate()[0]; // <- save last rotation angle      
      g.selectAll(".ortho").classed("ortho", ortho = false);
      projection = projectionMap;
      path.projection(projection);
      g.selectAll("path").transition().duration(3000).attr("d", path);
    }

  });

  //Globe rotating via timer

  d3.timer(function() {
    var λ = speed * (Date.now() - start);

    projection.rotate([λ + corr, -5]);
    g.selectAll(".ortho").attr("d", path);

  });

  //Adding extra data when focused

  function focus(d) {
    if (focused === d) return reset();
    g.selectAll(".focused").classed("focused", false);
    d3.select(this).classed("focused", focused = d);
  }

  //Reset projection

  function reset() {
    g.selectAll(".focused").classed("focused", focused = false);
    infoLabel.style("display", "none");
    zoneTooltip.style("display", "none");

    //Transforming Map to Globe

    projection = projectionGlobe;
    path.projection(projection);
    g.selectAll("path").transition()
    .duration(3000).attr("d", path)
    .call(endall, function() {
      g.selectAll("path").classed("ortho", ortho = true);
      start = Date.now(); // <- reset start for rotation
    });
  }
};