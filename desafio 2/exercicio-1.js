// *******************  EXERCÍCIO 1  *******************
function criarQuadrado() {
  var quadrado = document.createElement("div");

  quadrado.style.width = "100px";
  quadrado.style.height = "100px";
  quadrado.style.backgroundColor = "red";
  quadrado.style.margin = "4px";

  var containerElement = document.querySelector("#quadrados");
  containerElement.appendChild(quadrado);
}
