function drawChart(data, element) {
  const width = 300;
  const height = 150;
  const margin = { top: 10, right: 10, bottom: 10, left: 10 };

  const svg = d3.select(element)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const arc = d3.arc()
    .innerRadius(70)
    .outerRadius(100)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2);

  svg.append("path")
    .attr("d", arc)
    .attr("transform", `translate(${width / 2}, ${height})`)
    .attr("fill", "#ccc");

  const scale = d3.scaleLinear()
    .domain([0, 100])
    .range([-Math.PI / 2, Math.PI / 2]);

  const pointer = svg.append("g")
    .attr("transform", `translate(${width / 2}, ${height})`);

  pointer.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", -70)
    .attr("stroke", "red")
    .attr("stroke-width", 2);

  pointer.attr("transform", `translate(${width / 2}, ${height}) rotate(${scale(data[0].value) * 180 / Math.PI})`);
}

// Placeholder data
const data = [{ value: 90 }];
drawChart(data, document.getElementById("chart-container"));
