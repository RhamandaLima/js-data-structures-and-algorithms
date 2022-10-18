let averageTempDay1 = [72, 75, 79, 79, 81, 81];
let averageTempDay2 = [81, 79, 75, 75, 73, 72];

// Essa não é, no entanto, a melhor abordagem
// Uma 'matriz' é o mais adequado: 

let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1]= [81, 79, 75, 75, 73, 72];
console.log(averageTemp)

// Por mais que o JavaScript aceite apenas arrays unidimensionais, não tendo suporte para matrizes, podemos utilixar o array de arrays, como no código anterior. 

// Dia 01: 
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
console.log(averageTemp)

// Dia 02:
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 73;
console.log(averageTemp)

// Para ver a saída da matriz: 

function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
           console.log(myMatrix[i][j]);
        }
    }
}

printMatrix(averageTemp);
console.table(averageTemp);

// Vamos criar uma matriz 3 x 3, isto é, um array multidimensional:
// i = linha; j = coluna; z = profundidade.

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;            
        }
    }
}

for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
        for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(matrix3x3x3[i][j][z])
        }
    }
}

console.table(matrix3x3x3);
