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


