var num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log(num);
console.log("num == 1 : " + (num == 1));
console.log("num === 1: " + (num === 1));
console.log("num != 1 : " + (num != 1));
console.log("num > 1 : " + (num > 1));
console.log("num < 1 : " + (num < 1));
console.log("num >= 1 : " + (num >= 1));
console.log("num <= 1 : " + (num <= 1));
console.log("true && false : " + (true && false));
console.log("true || false : " + (true || false));
console.log("!true : " + !true);

// bit a bit (bitwise):

console.log("5 & 1: ", 5 & 1);
console.log("5 | 1: ", 5 | 1);
console.log("~ 5: ", ~5);
console.log("5 ^ 1: ", 5 ^ 1);
console.log("5 << 1: ", 5 << 1);
console.log("5 >> 1: ", 5 >> 1);

// typeof:

console.log("typeof num: ", typeof num);
console.log("typeof Packt: ", typeof "Packt");
console.log("typeof true: ", typeof true);
console.log("typeof [1, 2, 3]: ", typeof [1, 2, 3]);
console.log("typeof {name: John}: ", typeof { name: "John" });

// operador delete:

var myObj = { name: "John", age: 21 };
console.log(myObj);
delete myObj.age;
console.log(myObj);
