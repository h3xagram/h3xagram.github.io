<!--
function meanarterialpressure() {

var sys = document.mapForm.sys.value
var dia = document.mapForm.dia.value

if(sys > 0 && dia > 0) {
var finalMap = (2/3)*dia + (1/3)*sys
document.mapForm.map.value = finalMap
if(finalMap < 70){
document.mapForm.meaning.value = "Hypoperfusion."
}
if(finalMap > 70 && finalMap < 105){
document.mapForm.meaning.value = "Physiology."
}
if(finalMap > 105){
document.mapForm.meaning.value = "Hyperperfusion."
}
}
else{
alert("Error")
}
}
//-->
