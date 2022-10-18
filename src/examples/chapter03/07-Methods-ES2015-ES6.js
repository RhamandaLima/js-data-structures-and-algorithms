const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Laço 'for...of':

for (const n of numbers) {
    console.log(`${n} é multiplo de 2:`, n % 2 === 0 ? 'even' : 'odd');
}

// Usando o objeto @@iterator:
// Para usá-la, é necessário acessar a propriedade 'Symbol.iterator'. 

let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 

// Para apresentar todos os valores do array com @@iterator: 

for (const n of iterator) {
    console.log(n);
}
