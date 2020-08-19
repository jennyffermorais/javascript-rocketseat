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
  axios
    .get("https://api.github.com/users/" + nomeUsuario + "/repos")
    .then(function (response) {
      preencherLista(response.data);
    })
    .catch(function (error) {
      alert("Não foi possível efetuar a busca!");
    });
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
