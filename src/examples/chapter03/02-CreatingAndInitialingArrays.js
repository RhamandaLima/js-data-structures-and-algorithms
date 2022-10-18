let daysOfWeek = new Array();
console.log(daysOfWeek)

daysOfWeek = new Array(7);
console.log(daysOfWeek)

daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
console.log(daysOfWeek)

// Contudo, 'new' não é ocnsiderada a melhor prática, e sim: 

let daysOfWeek1 = [];
console.log(daysOfWeek1);

let daysOfWeek2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(daysOfWeek2);
console.log(daysOfWeek2.length);
