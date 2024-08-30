"use strict"
let number1 = 0;
let number2 = 0;
let result = 0;

function clear() {
	document.getElementById("input1").value = ""
	document.getElementById("input2").value = ""
	document.getElementById("output").innerText = 0
}
function convertnum() {
	number1 = Number(document.getElementById("input1").value)
	number2 = Number(document.getElementById("input2").value)
	
}

function addNum() {
	convertnum()
	result = number1 + number2;
	document.getElementById("output").innerText = String(result)
}

function subNum() {
	convertnum()
	result = number1 - number2;
	document.getElementById("output").innerText = String(result)
}

function multiNum() {
	convertnum()
	result = number1 * number2;
	document.getElementById("output").innerText = String(result)
}

function divNum() {
	convertnum()
	result = number1 / number2;
	document.getElementById("output").innerText = String(result)
}

document.getElementById("reset").addEventListener("click", clear)
document.getElementById("add").addEventListener("click", addNum);
document.getElementById("sub").addEventListener("click", subNum);
document.getElementById("multi").addEventListener("click", multiNum);
document.getElementById("div").addEventListener("click", divNum);