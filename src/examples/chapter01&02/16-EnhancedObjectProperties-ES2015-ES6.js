//desestruturação de array (array destructuring): 
let [x, y] = ['a', 'b'];
console.log(x, y)

//é o mesmo que:
let x1 = 'a';
let y1 = 'b' ;

//swap: 

[x, y] = [y, x]
console.log(x, y)

//é o mesmo que: 
var temp = x; 
x = y; 
y = temp; 

//abreviação de propriedades (property shorthand): 

let [x2, y2] = ['a', 'b'];
let obj = { x, y };
console.log(obj)

//é o mesmo que: 

var x3 = 'a';
var y3 = 'b';
var obj2 = { x: x, y: y };
console.log(obj2)

//nomes de métodos abreviados (shorthand method names): 

const hello = {
    name: 'abcdef',
    printHello(){
        console.log('Hello');
    }
};
console.log(hello.printHello());

//é o mesmo que: 

var hello2 = {
    name: 'abcdef',
    printHello: function printHello() {
        console.log('Hello');
    }
};
console.log(hello2.printHello());
