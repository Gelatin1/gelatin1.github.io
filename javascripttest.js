const xArray = ["1","2","3","4","5"];
const yArray = [55, 49, 44, 24, 15];

const data = [{
  x: xArray,
  y: yArray,
  type: "bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255)"}
}];

const layout = {title:"number rating"};

Plotly.newPlot("myPlot", data, layout);

