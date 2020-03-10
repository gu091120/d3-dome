import { select } from "d3-selection";
import { transition } from "d3-transition";

let id = 0,
    data = [],
    duration = 5000,
    chartHeight = 200,
    chartWidth = 600;

var trans = transition();

function createData(data) {
    data.push({
        uid: Math.random(),
        count: Math.round(chartHeight * Math.random())
    });
}
for (let i = 0; i < 20; i++) {
    createData(data);
}

function init() {
    data.shift();
    data.push({ uid: id++, count: Math.round(chartHeight * Math.random()) });
    randerData(data);
    console.log(data);
}

function randerData(datas) {
    const selector = select("#root")
        .style("height", chartHeight + 50 + "px")
        .selectAll("div.v-bar")
        .data(datas, d => d.uid);

    selector
        .enter()
        .append("div")
        .attr("class", "v-bar")
        .style("left", (d, index) => (index-1) * 60 + "px")
        .append("span");

    selector
        .transition()
        .duration(1500).delay(1400)
        .style("height", d => d.count + "px")
        .style("left", (d, index) =>(index) * 60 + "px")
        .select("span")
        .text(d => d.count);

    selector
        .exit()
        .transition()
        .duration(1200)
        .style("height", d => "0px")
        .style("left", (d, index) =>(index+1) * 60 + "px")
        .remove();
}

setInterval(function() {
    init();
}, 2000);
