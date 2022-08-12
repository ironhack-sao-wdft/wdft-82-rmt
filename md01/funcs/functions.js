// Funções

// São como maquinas, as motos são como as lanchas e os pedestres são como os enfim ...

// Fase de criar a maquina
function liquidificador(fruta, liquido) {
  return `Seu suco de ${fruta} batido com ${liquido} está pronto`;
}

// Liga a maquina na casa dele e coloca os insumos dentro
liquidificador("morango", "leite");

// Qual a diferença entre

liquidificador; // Referencia de uma função. A gente "empresta nossa maquina" desse jeito
liquidificador("laranja", "água"); // Invocação de uma função

// Parametros da funções

function sum(goiaba, grampeador) {
  return goiaba + grampeador;
}

console.log(sum("grampeador", "goiaba"));

// Outras formas de escrever funções

// "Classica"

// Function Declaration

function nomeDaFunc(parametros) {
  // escopo da função

  return "Alguma coisa";
}

// Expression

// Sem Arrow

const declarationFunc = function () {
  return "Alguma coisa";
};

// Com a arrow - Arrow Function

const arrowFunc = () => {
  return "Alguma coisa";
};

// Hoisting **

// Transformando funções

function normal(parametros) {
  // Escopo da função
  return "Algo";
}

// const normal = (parametros) => {
//   // Escopo da função
//   return "Algo";
// };

// Se a minha função tiver basicamente uma linha apenas e ela so serve pra retornar algo, eu posso pular mais etapas ainda

// const normal = (parametros) => "algo";

console.log(typeof normal);
// console.log(normal());

// Eu posso omitir as chaves e a palavra return
