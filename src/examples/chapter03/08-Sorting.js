// Ordenando elementos: 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
numbers.reverse();
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

// é o mesmo que:

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if(a > b) {
        return 1;
    }
    return 0;
}
numbers.sort(compare);
console.log(numbers);

// Ordenação personalizada: 

const friends = [
    { name: 'John', age: 30 }, 
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 },
]; 

function comparePerson(a, b) {
    if(a.age < b.age) {
        return -1; 
    }
    if(a.age > b.age) {
        return 1; 
    }
    return 0; 
}
console.log(friends.sort(comparePerson));

// Ordenando strings: 

let names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort());

names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1; 
    }
    if(a.toLowerCase() > b.toLowerCase()) {
        return 1; 
    }
    return 0;
}));
names.sort((a, b) => a.localeCompare(b));
console.log(names);

const names2 = ['Maéve', 'Maeve'];
console.log(names2.sort((a, b) => a.localeCompare(b)));
