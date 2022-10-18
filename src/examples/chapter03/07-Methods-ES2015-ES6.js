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

// Usando métodos 'entries', 'keys' e 'values' de array
// 'entries': 
let aEntries = numbers.entries();
console.log('[posição, valor]:', aEntries.next().value);
console.log('[posição, valor]:', aEntries.next().value);
console.log('[posição, valor]:', aEntries.next().value);

aEntries = numbers.entries(); 
for (const n of aEntries) {
    console.log('[posição, valor]:', n);
}

// 'keys': 
const aKeys = numbers.keys();
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

// 'values':
const aValues = numbers.values();
console.log(aValues.next());

// Usando o método 'from':
// O método 'Array.from' cria outro array a partir de um array existente. 

let numbers2 = Array.from(numbers);
console.log(numbers2);

let evens = Array.from(numbers, x => (x % 2 == 0));
console.log(evens);

// Usando o método 'Array.of': 

let numbers3 = Array.of(1);
console.log(numbers3);

let numbers4 = Array.of(1, 2, 3, 4, 5, 6);
console.log(numbers4);

let numbersCopy = Array.of(...numbers4);
console.log(numbersCopy);
