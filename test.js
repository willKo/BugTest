'use strict';

const fabric = require('fabric').fabric;
const fs = require('fs');

console.log('Script Started');
const style = fabric.document.createElement('style');
style.textContent =
  "@font-face {font-family: 'Economica-Regular';src: url('/Economica-Regular.ttf');font-weight: normal;font-style: normal;}";
fabric.document.head.appendChild(style);

const canvas = new fabric.createCanvasForNode(800, 200);
/*<!--  canvas.Font is not defined on Windows !!!! */
const font = new canvas.Font('Economica-Regular', 'Economica-Regular.ttf');

canvas.contextContainer.addFont(font);
canvas.contextTop.addFont(font);

const txt = new fabric.IText('My Example Text: tea  TimE!', {
  left: 10,
  top: 30,
  fontSize: 40,
  fontFamily: 'Economica',
});
txt.styles[0] = {};
for (let i = 0; i < txt.text.length; i++) {
  txt.styles[0][i] = { fontSize: 40 + i };
}
txt.setCoords();

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
