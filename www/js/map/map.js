//AHP.

//Mean arterial pressure (MAP) calculator

//MAP = CO * TPR
//Where Cardiac Output(CO) equals Stroke Volume * Heart Rate & Total Peripheral Resistance (TPR) equals ...

//Values ..
//Source ..

function meanarterialpressure() {

var sys = document.mapForm.sys.value
var dia = document.mapForm.dia.value

if(sys > 0 && dia > 0) {
var finalMap = (2/3)*dia + (1/3)*sys
document.mapForm.map.value = finalMap
if(finalMap < 70){
document.mapForm.meaning.value = "Hypoperfusion."
}
if(finalMap > 71 && finalMap < 110){
document.mapForm.meaning.value = "Physiology."
}
if(finalMap > 111){
document.mapForm.meaning.value = "Hyperperfusion."
}
}
else{
alert("Error")
}
}
