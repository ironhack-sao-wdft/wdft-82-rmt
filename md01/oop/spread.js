const arr = [1, 2, 3, 4, 5, 6];

const newArr = [...arr];

const obj = { name: "Alexandre", prof: "Professor" };
const obj2 = {};

const newObj = { ...obj };

console.log(newObj);

const name = "Alexandre";

const set = new Set(name);

const arr2 = [...set];

const abc = ["a", "z", "J", "h", "g", "F", "goiaba"];

abc.sort();

console.log(abc);
