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
