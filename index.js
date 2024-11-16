const inputTemps = document.getElementById("inputTemps")
const cToF = document.getElementById("cToF")
const fToC = document.getElementById("fToC")
const cToK = document.getElementById("cToK")
const kToC = document.getElementById("kToC")
const fToK = document.getElementById("fToK")
const kToF = document.getElementById("kToF")
const cToR = document.getElementById("cToR")
const fToR = document.getElementById("fToR")
const kToR = document.getElementById("kToR")
const rToC = document.getElementById("rToC")
const rToF = document.getElementById("rToF")
const rToK = document.getElementById("rToK")
const outputTemps = document.getElementById("outputTemps")
let temp;

function convert(){
    if(cToF.checked){
        temp = Number(inputTemps.value)
        temp = temp * 9 / 5 + 32;
        outputTemps.textContent = temp.toFixed(1) + "°F"
    } else if(fToC.checked){
        temp = Number(inputTemps.value)
        temp = (temp - 32) * (5/9);
        outputTemps.textContent = temp.toFixed(1) + "°C"
    } else if(cToK.checked){
        temp = Number(inputTemps.value)
        temp = temp + 273.15;
        outputTemps.textContent = temp.toFixed(1) + " K"
    } else if(fToK.checked){
        temp = Number(inputTemps.value)
        temp = (temp - 32) * (5/9) + 273.15;
        outputTemps.textContent = temp.toFixed(1) + " K"
    } else if(kToC.checked){
        temp = Number(inputTemps.value)
        temp = temp - 273.15;
        outputTemps.textContent = temp.toFixed(1) + "°C"
    } else if(kToF.checked){
        temp = Number(inputTemps.value)
        temp = (temp - 273.15) * (9/5) + 32;
        outputTemps.textContent = temp.toFixed(1) + "°F"
    } else if(cToR.checked){
        temp = Number(inputTemps.value)
        temp = temp * 9 / 5 + 491.67;
        outputTemps.textContent = temp.toFixed(1) + " R"
    } else if(fToR.checked){
        temp = Number(inputTemps.value)
        temp = temp + 459.67
        outputTemps.textContent = temp.toFixed(1) + " R"
    } else if(kToR.checked){
        temp = Number(inputTemps.value)
        temp = temp * 1.8
        outputTemps.textContent = temp.toFixed(1) + " R"
    } else if(rToC.checked){
        temp = Number(inputTemps.value)
        temp = (temp - 491.67) * 5/9 
        outputTemps.textContent = temp.toFixed(1) + "°C"
    } else if(rToF.checked){
        temp = Number(inputTemps.value)
        temp = temp - 459.67 
        outputTemps.textContent = temp.toFixed(1) + "°F"
    } else if(rToK.checked){
        temp = Number(inputTemps.value)
        temp = temp * 5/9 
        outputTemps.textContent = temp.toFixed(1) + " K"
    }
}