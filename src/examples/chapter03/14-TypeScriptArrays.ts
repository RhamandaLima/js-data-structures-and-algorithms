const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // TS identifica o tipo por conta da inferência de tipo
console.log(numbers);

interface Person {
    name: string;
    age: number;
}

// const friends: {name: string, age: number}[];
let friends1: Person[];

const friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 },
];

function comparePerson(a: Person, b: Person) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}

console.log('friends.sort(comparePerson)', friends.sort(comparePerson));
