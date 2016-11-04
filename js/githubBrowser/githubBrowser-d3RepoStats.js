var svg = dimple.newSvg('#chart', "100%", "85%");

function dimpleStacked(data) {
   // debugger;

    //d3.tsv("/content/example_data.tsv", function (data) {
    var myChart = new dimple.chart(svg, data);
    //myChart.setBounds(60, 30, 900, 400);

    var x = myChart.addCategoryAxis("x", "User");
    //x.addOrderRule(['Jan', 'Feb', 'Mar', 'Apr']);
    var y = myChart.addMeasureAxis("y", "Tasks");

    // In order to deal with cases where order differs by column 
    // you need to include it in your series definition
    var s = myChart.addSeries(["Tasks", "MyValue" ], dimple.plot.bar);

    s.getTooltipText = function (e) {
      //  debugger;
        var AorD = e.aggField[1] == "Additions" ? "Additions" : "Deletions";

        return [
            e.cx + " had " + e.aggField[0] + " " + AorD
        ];
    };
    d3.svg.axis()
    .tickFormat(d3.format("d"));

    // Your function approach would also work, but as it is the default 
    // handling for a numeric column you can just specify order like this
    s.addOrderRule("MyValue");

    y.showPercent = false;
    y.hidden = false;
   // y.overrideMax = 500;
    myChart.assignColor('Additions', '#c1f4cb');
    myChart.assignColor('Deletions', '#f2bba2');

    myChart.addLegend(60, 10, 510, 20, "right");
    myChart.draw();

    // If you don't want the order to show in the tooltip
    // the easiest way is to remove it here once the chart is drawn
    s.categoryFields = ["User"];




}