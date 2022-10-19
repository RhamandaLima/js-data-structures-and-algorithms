// TypedArrat foi criado para trabalhar com arrays contendo um único tipo de dado

// let myArray = new TypedArray(length); // 'TypedArray' deve ser substituído por uma classe especificada em tabela

// Exemplo: 

let length = 5; 
let int16 = new Int16Array(length);

let array16 = [];
array16.length = length; 

for (let i = 0; i < length; i++) {
    int16[i] = i + 1; 
}
console.log(int16);
