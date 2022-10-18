var circleAreaES5 = function circleArea(r) {
    var PI = 3.14; 
    var area = PI * r * r;
    return area;
}

console.log(circleAreaES5(2))

// com Arrow Function: 

const circleArea = r => {
    const PI = 3.14;
    const area = PI * r * r;
    return area; 
}

console.log(circleArea(2));

// com AF simplificado: 

const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(2))

// com AF sem argumento: 

const hello = () => console.log('hello!');
hello();
