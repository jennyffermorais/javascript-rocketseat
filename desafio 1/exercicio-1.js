// *******************  EXERCÍCIO 1  *******************

function frase(endereco) {
  var exibir =
    "O usuário mora em " +
    endereco.cidade +
    "/ " +
    endereco.uf +
    ", no bairro " +
    endereco.bairro +
    ", na rua " +
    endereco.rua +
    " com nº " +
    endereco.numero +
    ".";

  console.log(exibir);
}

function fraseMenor(endereco) {
  var exibirMenos =
    "O usuário mora em " + endereco.cidade + "/ " + endereco.uf + ".";

  console.log(exibirMenos);
}

var endereco1 = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP",
};

var endereco2 = {
  rua: "dos Bobos",
  numero: 0,
  bairro: "Muito engraçada",
  cidade: "Vila Velha",
  uf: "ES",
};

frase(endereco1);
frase(endereco2);

fraseMenor(endereco1);
fraseMenor(endereco2);
