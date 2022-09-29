function testTruthy(val) {
    return val ? console.log('truthy') : console.log('falsy');
}

testTruthy(true); // true
testTruthy(false); // false
testTruthy(new Boolean(false)); // true
testTruthy(''); // false
testTruthy('Packt'); // true
testTruthy(new String('')); // true
testTruthy(1); // true
testTruthy(-1); // true
testTruthy(NaN); // false
testTruthy(new Number(NaN)); // true
testTruthy({}); // true
var obj = { name: 'John'}; 
testTruthy(obj); // true
testTruthy(obj.name); // true
testTruthy(obj.age); // false