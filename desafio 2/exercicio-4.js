// ******************* EXERCÍCIO 4 *******************
var listaElementos = document.querySelector("ul");
var input = document.querySelector("input");
var button = document.querySelector("button");

var nomes = ["Diego", "Gabriel", "Lucas"];

function adicionarNomes() {
  listaElementos.innerHTML = ""; //limpar a lista

  for (var i = 0; i < nomes.length; i++) {
    var itemLista = document.createElement("li");
    var itemListaTexto = document.createTextNode(nomes[i]);

    itemLista.appendChild(itemListaTexto);
    listaElementos.appendChild(itemLista);
  }
}
adicionarNomes();

function adicionarNovo() {
  var itemListaTexto = input.value;

  nomes.push(itemListaTexto);
  input.value = "";
  adicionarNomes();
}

button.onclick = adicionarNovo;
