

var svg = d3.select("#chart")
    .append("svg").attr("ng-show", "chartMessage==null")
    .append("g")

svg.append("g")
    .attr("class", "slices");
svg.append("g")
    .attr("class", "labelName");
svg.append("g")
    .attr("class", "labelValue");
svg.append("g")
    .attr("class", "lines");

var width = 960 / 2,
    height = 450 / 2,
    radius = (Math.min(width, height) / 2) + 20;

var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
        return d.value;
    });

var arc = d3.svg.arc()
    .outerRadius(radius * 0.8)
    .innerRadius(radius * 0.4);

var outerArc = d3.svg.arc()
    .innerRadius(radius * 0.9)
    .outerRadius(radius * 0.9);

var legendRectSize = (radius * 0.05);
var legendSpacing = radius * 0.02;


var div = d3.select("body").append("div").attr("class", "toolTip");



//var width = 960 / 2,
//    height = 450 / 2,
//    radius = (Math.min(width, height) / 2) + 20;

svg.attr("transform", "translate(" + width / 2 + "," + ((height / 2) + 55) + ")");

var colorRange = d3.scale.category20();
var color = d3.scale.ordinal()
    .range(colorRange.range());


function change(data) {

    /* ------- PIE SLICES -------*/
    var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data), function (d) { return d.data.label });

    slice.enter()
        .insert("path")
        .style("fill", function (d) { return color(d.data.label); })
        .attr("class", "slice");

    slice
        .transition().duration(1000)
        .attrTween("d", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                return arc(interpolate(t));
            };
        })
    slice
        .on("mousemove", function (d) {
            div.style("left", d3.event.pageX + 10 + "px");
            div.style("top", d3.event.pageY - 25 + "px");
            div.style("display", "inline-block");
            div.html((d.data.label) + "<br>" + (d.data.value) + "%");
        });
    slice
        .on("mouseout", function (d) {
            div.style("display", "none");
        });

    slice.exit()
        .remove();



    /* ------- SLICE TO TEXT POLYLINES -------*/

    var polyline = svg.select(".lines").selectAll("polyline")
        .data(pie(data), function (d) { return d.data.label });

    polyline.enter()
        .append("polyline");

    polyline.transition().duration(1000)
        .attrTween("points", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                return [arc.centroid(d2), outerArc.centroid(d2), pos];
            };
        });

    polyline.exit()
        .remove();



    /* ------- TEXT LABELS -------*/

    var getAngle = function (d) {
        return (180 / Math.PI * (d.startAngle + d.endAngle) / 2 - 90);
    };

    var text = svg.select(".labelName").selectAll("text")
        .data(pie(data), function (d) { return d.data.label })
	  .attr("dy", ".35em")
	  .attr('text-anchor', 'middle')
	  .text(function (d) { return (d.data.cars > 10000) ? d.data.make : null; });

    var getAngle = function (d) {
        return (180 / Math.PI * (d.startAngle + d.endAngle) / 2 - 90);
    };



// Possible fix - but couldn't get working, didn't spend alot of time on it tho  - RL 8/12/19
// https://stackoverflow.com/questions/14534024/preventing-overlap-of-text-in-d3-pie-chart

    text.enter()
        .append("text")
        .attr("dy", ".35em")
        .text(function (d) {
            return (d.data.label + ": " + d.value + "%");

        })
         .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
                return "rotate(-65)"
            })     ;




    function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    text
        .transition().duration(1000)
        .attrTween("transform", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                var pos = outerArc.centroid(d2);
                pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
                return "translate(" + pos + ")";
            };
        })
        .styleTween("text-anchor", function (d) {
            this._current = this._current || d;
            var interpolate = d3.interpolate(this._current, d);
            this._current = interpolate(0);
            return function (t) {
                var d2 = interpolate(t);
                return midAngle(d2) < Math.PI ? "start" : "end";
            };
        })
        .text(function (d) {
            return (d.data.label + ": " + d.value + "%");
        });


    text.exit()
        .remove();


    alpha = .8;
    spacing = 11;

    function relax() {
        again = false;
        text.each(function (d, i) {
            a = this; //reference to text label
            da = d3.select(a);
            y1 = da.attr("y");
            text.each(function (d, j) {
                b = this;
                // a & b are the same element and don't collide.
                if (a == b) return;
                db = d3.select(b);
                // a & b are on opposite sides of the chart and
                // don't collide
                if (da.attr("text-anchor") != db.attr("text-anchor")) return;
                // Now let's calculate the distance between
                // these elements. 
                y2 = db.attr("y");
                deltaY = y1 - y2;

                // If spacing is greater than our specified spacing,
                // they don't collide.
                if (Math.abs(deltaY) > spacing) return;

                // If the labels collide, we'll push each 
                // of the two labels up and down a little bit.
                again = true;
                sign = deltaY > 0 ? 1 : -1;
                adjust = sign * alpha;
                da.attr("y", +y1 + adjust);
                db.attr("y", +y2 - adjust);
            });

        });
        // Adjust our line leaders here
        // so that they follow the labels. 
        if (again) {
            //debugger;
            labelElements = text[0];
            //  debugger;
            polyline.attr("y2", function (d, i) {
                //  debugger;
                labelForLine = d3.select(labelElements[i]);
                return labelForLine.attr("y");
            });




            setTimeout(relax, 20)
        }
    }

    relax();



};


