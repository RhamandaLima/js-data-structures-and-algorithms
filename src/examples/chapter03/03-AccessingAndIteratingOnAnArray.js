let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

// Queremos descobrir quais são os 20 primeiros números da sequência de Fibonacci.

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let j = 3; j < 20; j++) {
  fibonacci[j] = fibonacci[j - 1] + fibonacci[j - 2];
}

for (let k = 0; k < fibonacci.length; k++) {
  console.log(fibonacci[k]);
}
