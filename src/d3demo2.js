import { select } from "d3-selection";
import { transition } from "d3-transition";
import { scale, scaleQuantize } from "d3-scale";
const duration = 5000;

select("body")
    .append("div")
    .append("input")
    .attr("type", "button")
    .attr("class", "coundown")
    .attr("value", "0")
    .transition()
    .duration(duration)
    // .ease("linear")
    .styleTween("width", widthTween)
    .attrTween("value", valueTween);

function widthTween(a) {
    var interpolate = scaleQuantize()
        .domain([0, 1])
        .range([150, 200, 250, 400]);
    return t => {
        return interpolate(t) + "px";
    };
}

function valueTween(a) {
    var interpolate = scaleQuantize()
        .domain([0, 1])
        .range([1,2,3,4,5,6,7,8,9]);
    return t => {
        return interpolate(t) 
    };
}
