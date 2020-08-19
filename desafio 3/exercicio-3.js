// *******************  EXERCÍCIO 2  *******************

/* Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
  URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:  
  URL de exemplo: https://api.github.com/users/diego3g/repos */

let inputElement = document.querySelector("input");
let buttonElement = document.querySelector("button");
let listElement = document.querySelector("ul");

buttonElement.addEventListener("click", buscarRepositorios);

function buscarRepositorios() {
  let nomeUsuario = inputElement.value;

  if (!nomeUsuario) {
    renderError();
    alert("Preencha o campo");
  }
  carregando();

  axios
    .get("https://api.github.com/users/" + nomeUsuario + "/repos")
    .then(function (response) {
      preencherLista(response.data);
    })
    .catch(function (error) {
      alert("Não foi possível efetuar a busca!");
    });
}

function carregando(loading) {
  listElement.innerHTML = "";
  
  let loadingElement = document.createElement("li");
  let textElement = document.createTextNode("Carregando...");
  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}

function renderError(loading) {
  listElement.innerHTML = "";
  let nomeUsuario = inputElement.value;
  let mensagem = !nomeUsuario ? "Preencha o usuário" : "Erro ao efetuar busca";
  
  let errorElement = document.createElement("li");
  let textElement = document.createTextNode(mensagem);
  errorElement.style.color = "blueviolet";
  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}


function preencherLista(repositorios) {
  listElement.innerHTML = "";
  for (repo of repositorios) {
    let itemList = document.createElement("li");
    let nomeRepositorio = document.createTextNode(repo.name);

    itemList.appendChild(nomeRepositorio);
    listElement.appendChild(itemList);
  }
}
