var myName = 'Packt';
// myName = 10;
console.log(myName);
var age = 20;
var existsFlag = true;
var language = 'JavaScript';
// o TypeScript possui inferência de tipos, significa que o código verboso anterior pode ser reescrito da seguinte forma: 
var age2 = 20; //number
var existsFlag2 = true; //boolean
var language2 = 'JavaScript'; //string
// Porém, se declaramos a variável e não a inicializamos com um valor, então é necessário lhe atribuir um tipo:
var favoriteLanguague;
var langs = ['JavaScript', 'Ruby', 'Python'];
favoriteLanguague = langs[0];
console.log(favoriteLanguague);
function printName(person) {
    console.log(person.name);
}
var john = { name: 'john', age: 21 };
var mary = { name: 'Mary', age: 21, phone: '123-45678' };
printName(john);
printName(mary);
// b) Conceito 2: relacionado a POO; 
