var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

document.write("<h2>Optellen van de twee arrays zijn:</h2>");
for (var i = 0; i <= 9; i++) {
	document.write(arrayEen[i] + " + " + arrayTwee[i] + " = " + (arrayEen[i] + arrayTwee[i]) + "<br>");
}
document.write("<br>");

document.write("<h2>Aftrekken van de twee arrays zijn:</h2>");
for (var i = 0; i <= 9; i++) {
	document.write(arrayEen[i] + " - " + arrayTwee[i] + " = " + (arrayEen[i] - arrayTwee[i]) + "<br>");
}
document.write("<br>");

document.write("<h2>Vermenigvuldingen van de twee arrays zijn:</h2>");
for (var i = 0; i <= 9; i++) {
	document.write(arrayEen[i] + " * " + arrayTwee[i] + " = " + (arrayEen[i] * arrayTwee[i]) + "<br>");
}
document.write("<br>");

document.write("<h2>Delen van de twee arrays zijn:</h2>");
for (var i = 0; i <= 9; i++) {
	document.write(arrayTwee[i] + " / " + arrayEen[i] + " = " + (arrayTwee[i] / arrayEen[i]) + "<br>");
}
