// Juntando vários arrays: 'concat'

const zero = 0; 

const positiveNumbers = [1, 2, 3];
console.log('Positive Numbers: ', positiveNumbers);

const negativeNumbers = [-3, -2, -1];
console.log('Negative Numbers: ', negativeNumbers);

let numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log('Concat numbers: ', numbers);

// Funções de iteração: 

function isEven(x) {
    console.log(x);
    return x % 2 === 0 ? true : false;
}
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Com a sintaxe ES2015(ES6): ArrowFunction

const isEven1 = x => x % 2 === 0; 

console.log('Numbers:', numbers)

// Iterando com o método 'every': 

console.log('numbers.every(isEven): ', numbers.every(isEven));

// Iterando com o método 'some': 

console.log('numbers.some(isEven): ', numbers.some(isEven));

// Iterando com o 'forEach':

numbers.forEach(x => console.log(`${x} é multiplo de 2:`, x % 2 === 0));

// Os próximos métodos, 'map', 'filter', e 'reduce', são a base da programação funcional em Javascript. 
// Usando 'map' e 'filter':
// 'map': 
const myMap = numbers.map(isEven);
console.log(myMap); // Ele armazena os resultados da função isEven, passada para o método 'map'.

console.log(myMap[0]);
console.log(myMap[1]);

//'filter': 
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // Ele devolve um novo array com os elementos os quais a função devolveu true. 

// Usando o método 'reduce':
// Podemos usar essa função para devolver um valor que será somado a um acumulador, o qual será devolvido depois que o método 'reduce' parar de executar. 
// Isso pode ser útil se quisermos somar todos os valores de um array. 

numbers.reduce((previous, current) => previous + current);
console.log(numbers.reduce((previous, current) => previous + current));
