// export const circleArea = r => 3.14 * (r ** 2);
// export const squareArea = s => s * s;
// assim, não é necessário adicionar a linha de export ao final do arquivo

const circleArea = r => 3.14 * (r ** 2);
const squareArea = s => s * s;

module.exports = { circleArea, squareArea}
