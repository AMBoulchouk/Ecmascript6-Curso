let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let aray = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value*2]));

let hello = '                      Hello world';

console.log(hello);
console.log(hello.trimStart());

let hello = 'Hello world                  ';
console.log(hello.trimEnd());

try {

} catch {
    error;
}

let entries = [["name", "ale"]];

console.log(Object.fromEntries(entries));

let mySymbl = `My symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);