// Constantes

const myConst = 5;
const myConsts = [1, 2, 3];
myConsts.push(4); // Funciona
myConsts = [1, 2, 3, 4]; // Não funciona

// Let

for(var i = 0; i < 5; i++){
}
console.log(i); // Funciona

for(let i = 0; i < 5; i++){
}
console.log(i) // Não funciona

var a = 2;
{
    let a = 3;
    console.log(a); // Imprimi 3
}
console.log(a); // Imprimi 2

// Declarando varias variaveis

var [a, b, c] = [1, 2, 3];

var a = 1;
var b = 2;
var c = 3;

// Valor padrão a parametro na função

function myFunc(a){
    a = a || 5;
    console.log(a);
}

function myFunc(a = 5){
    console.log(a);
}

// Symbols

var mySymbols = Sumbol("My new Symbol");

// Operador Spread

var myList = [3, 4, 5],
    a = [1, 2, ...myList];

console.log(a);

// Template Literals

var myVar = 5;
console.log('My Var value is ${myVar}');

// For..of

var list = ["a", "b", "c", "d", "e"];

for (var index in list){
    console.log( index );
}

for (var value of list){
    console.log( value );
}

// Arrow Functions

var sum = (a, b) => {
    return a + b;
}

var double = n => n * 2;
console.log(double(5));

// Objectos Literais

var a = 5;
var b = 7;

var obj = {
    a: a,
    b: b
}

var a = 5;
var b = 7;

var obj = {
    a,
    b
}


