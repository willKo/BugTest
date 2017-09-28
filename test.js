'use strict';

const fabric = require('fabric').fabric;
const fs = require('fs');

console.log('Script Started');
const canvas = new fabric.createCanvasForNode(400, 400);
/*<!--  canvas.Font is not defined on Windows !!!! */
const font = new canvas.Font('Economica-Regular', './Economica-Regular.ttf');

canvas.contextContainer.addFont(font);
canvas.contextTop.addFont(font);

const txt = new fabric.IText('My Example Text is: zadgeFFE!', {
  left: 10,
  top: 30,
  fontSize: 40,
  fontFamily: 'Economica-Regular',
});
txt.styles[0] = {};
for (let i = 0; i < txt.text.length; i++) {
  txt.styles[0][i] = { fontFamily: 'Economica-Regular', fontSize: 40 + i };
}

// write to canvas
canvas.add(txt);
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

// write JPG dataurl
/*
const dataurlJPG = canvas.toDataURL(
  {
    format: 'jpg',
  }
);
fs.writeFileSync('dataurlJPG.txt', dataurlJPG);
*/
