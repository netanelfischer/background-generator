var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bodybg");
var button = document.querySelector(".rndBtn");

console.log(css.style);
random_linear();
console.log(css.style);


function random_bg() {
	// var x = Math.floor(Math.random() * 256);
	// var y = Math.floor(Math.random() * 256);
	// var z = Math.floor(Math.random() * 256);
	// var bgColor = "rgb(" + x + "," + y + "," + z + ")";
	// return bgColor;
	var hex = Math.floor(Math.random() *0xFFFFFF);
	return "#" + ("000000" + hex.toString(16)).substr(-6);
}

function random_linear() {
	color1.value = random_bg();
	color2.value = random_bg();
	setGredient()
}

function setGredient () {
	body.style.background = "linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background;
	button.style.background=body.style.background
}

color1.addEventListener("input",setGredient);
color2.addEventListener("input", setGredient);
button.addEventListener("click", random_linear)

