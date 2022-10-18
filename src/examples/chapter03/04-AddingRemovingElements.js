let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

// Adicionando um novo elemento no array(referencia a ultima posição livre do array e atribui-lhe um valor):

numbers[numbers.length] = 10;
console.log(numbers);

// Usando o método push: 

numbers.push(11);
numbers.push(12, 13);
console.log(numbers);

// Inserindo elemento na primeira posição: 

Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];        
    }
    this[0] = value;
};

numbers.insertFirstPosition(-1);
console.log(numbers);

// Usando o método unshift: 

numbers.unshift(-2);
numbers.unshift(-4, -3);
console.log(numbers);

// Removendo um elemento do final do array: 

numbers.pop();
console.log(numbers);
console.log(numbers.length);

// Removendo um elemento da primeira posição: 

for (let j = 0; j < numbers.length; j++) {
    numbers[j] = numbers[j + 1];
}
console.log(numbers); // Com isso, o array permanece com o mesmo tamanho e a última posição atribui um valor 'undefined', ou seja, sobrecrevemos os valores originais e não o removemos de fato.

Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for (let k = 0; k < myArray.length; k++) {
        if (myArray[k] !== undefined) {
            console.log(myArray[k]);
            newArray.push(myArray[k]);
        }
    }
    return newArray;
};

// remove a primeira posição manualmente e executa o reIndex: 

Array.prototype.removeFirstPosition = function() {
    for (let l = 0; l < this.length; l++) {
        this[l] = this[l + 1];
    }
    return this.reIndex(this);
};
numbers = numbers.removeFirstPosition();
console.log(numbers);

// Contudo, a melhor prática é a utilização do método 'shift': 

numbers.shift();
console.log(numbers);

// Adicionando e removendo elementos de uma posição específica
// Com o splice, indicamos a posição/índice que a partir do qual queremos remover e quantidade de elementos:

numbers.splice(5, 3);
console.log(numbers);

// OBS: Devemos sempre utilizar os métodos splice, pop ou shift para remover elementos. 

// Supondo que queremos inserir os números 2 a 4 de volta ao array a partir da posição 5: 

numbers.splice(5, 0, 2, 3, 4);
console.log(numbers);

numbers.splice(5, 3, 2, 3, 4);
console.log(numbers);
