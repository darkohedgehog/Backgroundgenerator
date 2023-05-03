let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function setGradient() {
  body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function setRandomColors() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

window.onload = function() {
  const gradientBox = document.querySelector(".gradientBox");
  Object.assign(gradientBox.style, {
    borderRadius: "3.5rem",
    borderStyle: "outset",
    boxShadow: "20px 20px 50px rgb(153, 147, 147)",
    background: "linear-gradient(to right, red , yellow)"
  });
}

