// import { circleArea, squareArea } from './17-CalcArea'; // {2}
// import { circleArea as circle } from './17-CalcArea';

// console.log(circleArea(2));
// console.log(squareArea(2));

/* forma diferente de importar  */
// import * as area from './17-CalcArea';

import { circle } from './17-CalcArea.js'
import { square } from './17-CalcArea.js'
import Book from './17-Book.js'

console.log(circle(2));
console.log(square(2));

const myBook = new Book('some title');
myBook.printTitle();
