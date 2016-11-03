var WIDTH;
var HEIGHT;
var BACKGROUND_COLOR;

var dataKeys = [];
var dataResultArray = [];

function preload() {
  var sampleUrl = 'http://moonrakervision.com/hemmaodlat/aquaponicsdata.csv';
  Papa.parse(sampleUrl, {
    delimiter: ",",
    skipEmptyLines: true,
    header: true,
  	download: true,
  	complete: function(results) {
      var keys = Object.keys(results.data[0]);
      dataKeys = keys;
      dataResultArray = results.data;
  		// console.log(keys[0] + " = " + results.data[0][keys[0]]);
      // console.log(keys[1] + " = " + results.data[0][keys[1]]);
      // console.log(keys[2] + " = " + results.data[0][keys[2]]);
      // console.log(keys[3] + " = " + results.data[0][keys[3]]);
      // console.log(Object.keys(results.data[0]));
    }
  });
  // font = loadFont("SourceCodePro-Regular.ttf");
}

function setup() {
  WIDTH = 1200;
  HEIGHT = 400;
  BACKGROUND_COLOR = 204;
  createCanvas(WIDTH, HEIGHT);
  //   // loadImage("lunar.jpg", drawImage);
  //   // noLoop();
  frameRate(1);
}


function draw() {
  strokeWeight(2);

  if (dataResultArray.length > 0) {
    plotLine(dataResultArray, 1, 200, color(255, 0, 0));
    plotLine(dataResultArray, 2, 10, color(0, 255, 0));
    plotLine(dataResultArray, 3, 10, color(0, 0, 255));
  }
}

function plotLine(dataArray, dataIndex, scale, colorName) {
  console.log("plot line");
  var y1;
  var y2;
  stroke(colorName);
  //console.log("dataKeys=" + dataKeys);
  //console.log("dataResultArray=" + dataResultArray);

  for (var i = 0; i < dataArray.length-1; i++) {
    y1 = parseFloat( dataArray[i][dataKeys[dataIndex]]);
    y2 = parseFloat(dataArray[i+1][dataKeys[dataIndex]]);
    //console.log("Y1=" + y1 + " " + "Y2=" + y2);
    line(i, HEIGHT - y1 * scale, i+1, HEIGHT - y2 * scale);
  }
}
