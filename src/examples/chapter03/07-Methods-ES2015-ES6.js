const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Laço 'for...of':

for (const n of numbers) {
    console.log(`${n} é multiplo de 2:`, n % 2 === 0 ? 'even' : 'odd');
}
