// ******************* EXERCÍCIO 2 *******************
function criarQuadrado() {
  var quadrado = document.createElement("div");

  quadrado.style.width = "100px";
  quadrado.style.height = "100px";
  quadrado.style.backgroundColor = "red";
  quadrado.style.margin = "4px";

  quadrado.setAttribute("onmouseenter", "mudarCor(this)");

  var containerElement = document.querySelector("#quadrados");
  containerElement.appendChild(quadrado);
}

function mudarCor(quadrado) {
  quadrado.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var newColor = getRandomColor(); // #E943F0
