var num = 1; 
num = 3; 
var price = 1.5; 
var myName = 'Packt';
var trueValue = true; 
var nullVar = null; 
var und;

console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('price: ' + price);
console.log('trueVale: ' + trueValue);
console.log('nullVar: ', nullVar);
console.log('und: ', und);

// Ao utilizar console.log('und: ', und) permite-se adicionar uma descrição e visualizar o conteúdo caso ela um objeto, enquanto console.log('und: ' + und) concatena o resultado em uma única string.

// Escopo das variáveis:

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable);
console.log(myFunction());
console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);