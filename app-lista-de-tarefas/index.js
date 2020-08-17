//pegando os elementos html
var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var tarefas = JSON.parse(localStorage.getItem("list_tarefas")) || ["Estudar JavaScript", "Estudar React", "Estudar Python"];

function renderTarefas() {
  //remover todo o conteúdo da lista
  listElement.innerHTML = "";

  for (tarefa of tarefas) {
    //criando os elementos da lista e o texto de cada
    var tarefaElement = document.createElement("li");
    var tarefaText = document.createTextNode(tarefa);

    var linkElement = document.createElement("a");
    //definir o atributo do elemento criado
    linkElement.setAttribute("href", "#");

    var pos = tarefas.indexOf(tarefa);
    linkElement.setAttribute("onclick", "delTarefa(" + pos + ")");

    var linkText = document.createTextNode(" Excluir");
    linkElement.appendChild(linkText);

    //adicionar o texto dentro do elemento
    tarefaElement.appendChild(tarefaText);
    tarefaElement.appendChild(linkElement);

    //adicionar cada elemento dentro da ul
    listElement.appendChild(tarefaElement);
  }
}

renderTarefas();

function addTarefa() {
  var tarefaText = inputElement.value;

  tarefas.push(tarefaText);
  inputElement.value = "";
  renderTarefas();
  saveToStorage();
}

buttonElement.onclick = addTarefa;

function delTarefa(pos) {
  //remove uma quantidade de itens baseado na posição passada
  tarefas.splice(pos, 1);
  renderTarefas();
  saveToStorage();
}

// salvar e transformar o array em json
function saveToStorage() {
  localStorage.setItem("list_tarefas", JSON.stringify(tarefas));
}
