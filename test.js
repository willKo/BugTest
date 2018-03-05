'use strict';

const fabric = require('fabric').fabric;
const fs = require('fs');
const path = require('path');

function fontFile(name) {
  return path.join(__dirname, name);
}

function styleTextandAddToCanvas(canvas, txt) {
  txt.styles[0] = {};
  for (let i = 0; i < txt.text.length; i++) {
    txt.styles[0][i] = { fontSize: 40 + i };
  }
  txt.setCoords();
  canvas.add(txt);
}

console.log('Script Started');

const canvas = new fabric.StaticCanvas(null, { width: 800, height: 300 });
fabric.nodeCanvas.Context2d.parseFont('Economica-Regular', fontFile('Economica-Regular.ttf'));
fabric.nodeCanvas.Context2d.parseFont('Sacramento-Regular', fontFile('Sacramento-Regular.ttf'));
const txt = new fabric.IText('My Example Text: tea  TimE!', {
  left: 10,
  top: 30,
  fontSize: 40,
  fontFamily: 'Economica',
});

const txt2 = new fabric.IText('My Example Text: tea  TimE!', {
  left: 10,
  top: 110,
  fontSize: 40,
  fontFamily: 'Sacramento',
});

const txt3 = new fabric.IText('My Example Text: tea  TimE!', {
  left: 10,
  top: 190,
  fontSize: 40,
});

styleTextandAddToCanvas(canvas, txt);
styleTextandAddToCanvas(canvas, txt2);
styleTextandAddToCanvas(canvas, txt3);

canvas.renderAll();
const svgStr = canvas.toSVG({
  suppressPreamble: true,
  encoding: 'UTF-8',
});
fs.writeFileSync('test.svg', svgStr);

// write PNG dataurl
const dataurlPNG = canvas.toDataURL({
  format: 'png',
});
fs.writeFileSync('dataurlPNG.txt', dataurlPNG);

console.log(`DONE - GENERATED FILES:
 dataurlPNG.txt -> contains dataurl (copy content to browser to see png)
 test.svg -> file containing SVG -> (open SVG in browser)`);

// write JPG dataurl
/*
const dataurlJPG = canvas.toDataURL(
  {
    format: 'jpg',
  }
);
fs.writeFileSync('dataurlJPG.txt', dataurlJPG);
*/
