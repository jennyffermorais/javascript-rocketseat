// ******************* EXERCÍCIO 3 *******************
var listaElementos = document.querySelector("ul");

var nomes = ["Diego", "Gabriel", "Lucas"];

function adicionarNomes() {
  for (var i = 0; i < nomes.length; i++) {
    var itemLista = document.createElement("li");
    var itemListaTexto = document.createTextNode(nomes[i]);

    itemLista.appendChild(itemListaTexto);
    listaElementos.appendChild(itemLista);
  }
}
adicionarNomes();
