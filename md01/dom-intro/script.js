console.log("Hello world");

console.log(document);

// Seletores

// ById (Um)

const span = document.getElementById("text");
console.log(span);

span.innerText = "Mudei pelo JS";

// ByClassName (Varios)

const blocks = document.getElementsByClassName("block");
console.log(blocks);

for (let i = 0; i < blocks.length; i++) {
  blocks[i].innerText = `Eu sou a div de index ${i}`;
}

// ByTagName (Varios)

const divs = document.getElementsByTagName("div");

console.log(divs);

// QuerySelector (Um)

const span2 = document.querySelector("#text");
const div = document.querySelector(".block");

console.log(span2);
console.log(div);

div.innerText = "Salve!";

// QuerySelectorAll (Varios)

const divs2 = document.querySelectorAll(".block");

console.log(divs2);

// Indo buscar os fio na escola

const exemploIgor = document.getElementById("about");

console.log(exemploIgor);

console.log("Primeiro filho", exemploIgor.children[0].children[0].innerText);

// Criando elementos pelo JS

const novoElemento = document.createElement("button");

exemploIgor.appendChild(novoElemento);

novoElemento.innerHTML = "Novo elemento de botão <p>Oi</p>";
novoElemento.innerText = "Novo elemento de botão <p>Oi</p>";
