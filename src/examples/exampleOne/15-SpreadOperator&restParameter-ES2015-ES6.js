function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
}

let params = [3, 4, 5];
console.log(sum(...params));

console.log(sum.apply(undefined, params));


// operador de espelhamento como um parâmetro rest
function restParameterFunction(x, y, ...a){
    return (x +  y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7));

function restParameterFunction2(x, y){
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log(restParameterFunction2(1, 2, 'hello', true, 7));
