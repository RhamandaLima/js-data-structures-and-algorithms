let myName = 'Packt';
// myName = 10;
console.log(myName)

let age: number = 20;
let existsFlag: boolean = true;
let language: string = 'JavaScript';

// o TypeScript possui inferência de tipos, significa que o código verboso anterior pode ser reescrito da seguinte forma: 

let age2 = 20; //number
let existsFlag2 = true; //boolean
let language2 = 'JavaScript'; //string

// Porém, se declaramos a variável e não a inicializamos com um valor, então é necessário lhe atribuir um tipo:

let favoriteLanguague: string; 
let langs = ['JavaScript', 'Ruby', 'Python'];
favoriteLanguague = langs[0];
console.log(favoriteLanguague)

// Interface:

// a) atribuição de um tipo a um variável. Conceito 1: uma descrição de atributos e métodos que um objeto deve ter: 
interface Person {
    name: string;
    age: number;
}

function printName(person: Person) {
    console.log(person.name);
}

const john = { name: 'john', age: 21 };
const mary = { name: 'Mary', age: 21, phone: '123-45678'};
printName(john);
printName(mary);

// b) Conceito 2: relacionado a POO

interface Comparable {
    compareTo(b): number;
}

class MyObject implements Comparable {
    age: number;
    compareTo(b): number {
        if(this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    }
}
