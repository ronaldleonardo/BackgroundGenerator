var css = document.getElementsByTagName("h3")[0];
var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var body = document.getElementById("gradient");
var button = document.getElementsByName("random")[0];
var randColorGen1 = function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var randColorGen2 = function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var colorWizard = function() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	};

var randColorWizard = function() {
	var randColor1 = randColorGen1();
	var randColor2 = randColorGen2();
	body.style.background = "linear-gradient(to right, " + randColor1 + ", " + randColor2 + ")";
	css.textContent = "linear-gradient(to right, " + randColor1 + ", " + randColor2 + ")";
	};

color1.addEventListener("input", colorWizard)
color2.addEventListener("input", colorWizard)
button.addEventListener("click", randColorWizard)