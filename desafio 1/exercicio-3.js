// ******************* EXERCÍCIO 3 *******************

function temHabilidade(skills) {
  if (skills.indexOf("Javascript") >= 0) {
    return true;
  } else {
    return false;
  }
}
var skills = ["Javascript", "ReactJS", "React Native"];
var resultado = temHabilidade(skills); // true ou false

console.log(resultado);
