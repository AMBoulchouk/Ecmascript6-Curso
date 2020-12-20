function newFunction(name, age, country) {
  var name = name || "Alex";
  var age = age || 27;
  var country = country || "Ar";
  console.log(name, age, country);
}

// es6
function newFunction2(name = "Alex", age = 27, country = "Ar") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Alejandro", 20, "Co");

let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Quiero escribir una frase epica \n" + "y otra frase epica";
//es6
let lorem2 = `otra frase epica que necesitamos
y otra frase epica
 `;

console.log(lorem);
console.log(lorem2);

//destructuracion de elementos

let person = {
  name: "ale",
  age: 28,
  country: "Ar",
};

console.log(person.name, person.age, person.country);

let { name, age, country } = person;

console.log(name, age, country);

let team1 = ["Oscar", "Juli", "Ricardo"];
let team2 = ["Vale", "Yess", "Cami"];

let education = ["David", ...team1, ...team2];

console.log(education);

{
  var globalVar = "GLOBAL VAR";
}

{
  let globalLet = "GLOBAL LET";
  console.log(globalLet);
}

console.log(globalVar);

const a = "b";
console.log(a);

let name = "ale";
let age = 27;
//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

const names = [
  { name: "Ale", age: 27 },
  { name: "otro", age: 20 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age) => {
  console.log(name);
};

const listOfNames4 = (name) => {
  console.log(name);
};

const square = (num) => num * num;

//asincronismo y promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Hola"))
  .then((reject) => console.log(reject))
  .catch((error) => console.log(error));

//clases
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from './module.js';

hello();

function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generetaroHello = helloWorld();
console.log(generetaroHello.next().value);
console.log(generetaroHello.next().value);

console.log(generetaroHello.next().value);