const r = 2;

const area = 3.14 * r * r;
console.log(area);

const area2 = 3.14 * Math.pow(r, 2);
console.log(area2);

// ES2016 introduziu o ** como novo operador de exponencial: 

const area3 = 3.14 * (r ** 2);
console.log(area3);
