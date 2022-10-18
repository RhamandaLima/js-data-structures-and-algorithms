// Sintaxe básica: 

function sayHello() {
    console.log('Hello!');
}
sayHello(); 

// Com argumento: 
function output(text) {
    console.log(text);
}
output('Hello!');
output('Hello!', 'Other text');

// Retornando valor: 

function sum(num1, num2) {
    return num1 + num2;
}
var result = sum(1, 2);
output(result);