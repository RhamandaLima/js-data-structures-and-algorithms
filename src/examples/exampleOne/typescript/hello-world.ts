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

