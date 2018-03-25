var but1 = document.getElementById("2007")
var but2 = document.getElementById("2016")
var o = document.getElementById("p");

var spending = [ "Social Secutirty, Unemployment, and Labor", "Medicare and Health", "National Defense", "Net Interest"];
var year_2007 = [983, 663, 569, 245];
var year_2016 = [1310, 1000, 541, 215];

var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(year_2007);
var barEnter = barUpdate.enter().append("div");

var display = function(){
    //instant transition:
    barEnter.style("width", function(d) {
	return d *0+ "px"; });
    barEnter.transition().duration(5000).style("width", function(d) {
	return d + "px"; });
    barEnter.text(function(d) { return "$" + d + " billion"; });
}

var tog1 = function(){
    p.innerHTML = "2007 Budget";
    bar = chart.selectAll("div");
    barUpdate = bar.data(year_2007);
    display();
}

var tog2 = function(){
    p.innerHTML = "2016 Budget";
    bar = chart.selectAll("div");
    barUpdate = bar.data(year_2016);
    display();
}

p.innerHTML = "2007 Budget";

//instant transition:
barEnter.style("width", function(d) {
    return d *0+ "px"; });

//5s transition:
barEnter.transition().duration(5000).style("width", function(d) {
    return d + "px"; });


barEnter.text(function(d) { return "$" + d + " billion"; });

but1.addEventListener("click", tog1);
but2.addEventListener("click", tog2);
