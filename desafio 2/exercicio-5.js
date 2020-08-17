// ******************* EXERCÍCIO 5 *******************

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

console.log(
  "O " +
    usuarios[0].nome +
    " possui as seguintes habilidades: " +
    usuarios[0].habilidades.join(", ") +
    "."
);

for (var usuario of usuarios) {
  console.log(
    "O " +
      usuario.nome +
      " possui as seguintes habilidades: " +
      usuario.habilidades.join(", ") +
      "."
  );
}
