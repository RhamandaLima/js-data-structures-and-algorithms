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
