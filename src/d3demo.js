import { select } from "d3-selection";
import {transition} from 'd3-transition';

var trans = transition().duration(750)
.ease();

let id = 0,
    data = [],
    duration = 5000,
    chartHeight = 200,
    chartWidth = 600;

function createData(data) {
    data.push({
        uid: id++,
        count: Math.round(chartHeight * Math.random())
    });
}
for (let i = 0; i < 10; i++) {
    createData(data);
}

function init() {
    randerData(data);
    data.shift();
    data.push({ uid: id++, count: Math.round(chartHeight * Math.random()) });
}

function randerData(datas) {

    const selector = select("#root").style("height",chartHeight+50+"px").selectAll("div.v-bar");

    selector
        .data(datas)
        .enter()
        .append("div")
        .attr("class", "v-bar")
        .append("span");

    selector
        .data(datas)
        .transition(trans)
        .style("height", d => d.count + "px")
        .select("span")
        .text(d => d.count);

    selector
        .data(datas)
        .exit()
        .remove();  
}

setInterval(function() {
    init();
}, 3000);


