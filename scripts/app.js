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

var obj = {
    x: function(){
        console.log(this);
    }
}

var obj = {
    x(){
        console.log(this);
    }
}

// Maps

var myObj = new Map();
var a = { value: 1 };
var b = { value: 2 };

myObj.set( a, 5 );
myObj.set( b, 10);

console.log(myObj.get(a), myObj.get(b));

// WeakMaps

var myObj = new WeakMap();
var a = { value: 1};
var b = { value: 2};

myObj.set(a, 5);
myObj.set(b, 10);

// Sets

var mySet = new Set();
var a = { myValue: 1};
var b = { myValue: 2};

mySet.add(a);
mySet.add(b);
mySet.add(c);

// WeakSets

var mySet = new WeakSet();
var a = { myValue: 1};
var b = { myValue: 2};

mySet.add(a);
mySet.add(b);

a = null;

// Classes

class Animal{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log('My name is ${this.name}');
    }
}

var myAnimal = new Animal('Gumball');
myAnimal.sayName();

// Estendendo Classe

class Cat extends Animal{
    constructor(name, age){
        super(name);
        this.age = age;
    }

    cry(){
        super.sayname();
        console.log('Meow');
    }
}
