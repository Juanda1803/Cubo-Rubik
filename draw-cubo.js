var element = document.getElementById('drawCube');
var object = element.getContext('2d');
var colorcito = 'gray';
var colorcito1 = 'yellow';
var colorcito2 = 'blue';
var colorcito3 = 'red';
var i;
var limit = 16;
var xi, xf, yi, yf;

for (i = 1; i < limit; i++) {
    xi = 500 + (20 * i);
    xf = 800 - (20 * i);
    yi = 800 - (13.3 * i);
    yf = 600 - (13.3 * i);
    linePosition(colorcito2, xi, xf, yi, yf)

}
for (i = 1; i < limit; i++) {
    xi = 500 - (20 * i);
    xf = 200 + (20 * i);
    yi = 800 - (13.3 * i);
    yf = 600 - (13.3 * i);
    linePosition(colorcito2, xi, xf, yi, yf)

}
for (i = 1; i < limit; i++) {
    xf = 800 - (20 * i);
    yi = 300 + (20 * i);
    yf = 600 - (13.3 * i);
    linePosition(colorcito3, 800, xf, yi, yf)

}
for (i = 1; i < limit; i++) {
    xi = 800 - (20 * i);
    yi = 300 - (13.3 * i);
    yf = 100 + (20 * i);
    linePosition(colorcito3, xi, 500, yi, yf)

}
for (i = 1; i < limit; i++) {
    xf = 200 + (20 * i);
    yi = 300 + (20 * i);
    yf = 600 - (13.3 * i);
    linePosition(colorcito1, 200, xf, yi, yf)

}
for (i = 1; i < limit; i++) {
    xi = 200 + (20 * i);
    yi = 300 - (13.3 * i);
    yf = 100 + (20 * i);
    linePosition(colorcito1, xi, 500, yi, yf)

}



linePosition(colorcito, 500, 500, 100, 400)
linePosition(colorcito, 500, 200, 400, 600)
linePosition(colorcito, 500, 800, 400, 600)
linePosition(colorcito, 200, 200, 300, 600)
linePosition(colorcito, 800, 800, 300, 600)
linePosition(colorcito, 500, 200, 100, 300)
linePosition(colorcito, 500, 800, 100, 300)
linePosition(colorcito, 200, 500, 600, 800)
linePosition(colorcito, 800, 500, 600, 800)

function linePosition(color, xinicial, xfinal, yinicial, yfinal) {
    object.beginPath();
    object.strokeStyle = color;
    object.moveTo(xinicial, yinicial);
    object.lineTo(xfinal, yfinal);
    object.stroke();
    object.closePath();

}