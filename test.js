'use strict';

const fabric = require('fabric').fabric;
const fs = require('fs');

console.log('Script Started');
const canvas = new fabric.createCanvasForNode(600, 600);
/*<!--  canvas.Font is not defined on Windows !!!! */
const font = new canvas.Font('Economica-Regular', './Economica-Regular.ttf');

canvas.contextContainer.addFont(font);
canvas.contextTop.addFont(font);(
//write canvas
canvas.add(
  new fabric.IText('My Example Text is: zadgeFFE!', {
    left: 10,
    top: 30,
    fontFamily: 'Economica-Regular',
  })
);

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