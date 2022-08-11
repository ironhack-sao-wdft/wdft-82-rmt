// Arrays

// Lista de coisas

// Indexada

const arr = [];

//Isso aqui não pode

// arr = ["Alexandre"];

// console.log(arr);

// Isso aqui pode

arr[0] = "Alexandre";

console.log(arr);

const arr2 = ["String", 10, false, [], {}];

console.log(arr2[2]);

const num = 3;

console.log(arr2[num]);

// Metodos basicos

const arr3 = [];

arr3.push("Alexandre");
arr3.push("Zih");
arr3.push("Daniel");
arr3.push("Maxwell O CRUEL");
arr3.push("Roger KATANA");

console.log(arr3);

arr3.shift();

console.log(arr3);

arr3.splice(1, 2);

console.log(arr3);

// Iterando sobre todos os elementos

const arr4 = [
  "Alexandre",
  "Daniel",
  "Roger",
  "Caroline",
  "Igor",
  "Vini",
  "Giu",
];

// Eu quero passar por essa array inteira e dar um console.log no numero de letras de cada nome dentro dessa array
// DE TRAZ PRA FRENTE

for (let i = arr4.length - 1; i >= 0; i--) {
  console.log(arr4[i].length);
}

const filmes = [
  { nome: "BATIMA", duração: "2h e meia", preço: "CARO" },
  { nome: "MIRANHA" },
];
