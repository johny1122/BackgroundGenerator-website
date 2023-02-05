var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");
var copyButton = document.getElementById("copy");
setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	resetCopyButton();
}

function setRandomGradient() {
	var colorLeft = randomColor();
	var colorRight = randomColor();

	body.style.background = 
	"linear-gradient(to right," + colorLeft + ","  + colorRight + ")";
	color1.value = rgbToHex(colorLeft);
	color2.value = rgbToHex(colorRight);
	css.textContent = body.style.background + ";";
	resetCopyButton();
}

function randomChannel() {
	return Math.floor(Math.random() * 256)
}

function randomColor() {
	return "rgb(" + randomChannel() + "," + randomChannel() + "," + randomChannel() + ")";
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(color) {  // color = "rgb(r,g,b)"
	var channels = color.substring(4, color.length - 1).split(",");
	var r = parseInt(channels[0]);
	var g = parseInt(channels[1]);
	var b = parseInt(channels[2]);
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// random button
randomButton.addEventListener("click", setRandomGradient);
body.appendChild(randomButton);

function resetCopyButton() {
	copy.innerText = "copy";
}

function copyCSS() {
	// Copy the text inside the h3 tag
  	navigator.clipboard.writeText(css.textContent);
  	copy.innerText = "copied!";
}

// copy button
copy.addEventListener("click", copyCSS);
