const days = ["Mon", "Tues", "Wed"];
const otherdays = ["Thu", "Fri", "Sat"];

const allDays = days + otherdays;
const allDay = [days, otherdays]; // [ [ 'Mon', 'Tues', 'Wed' ], [ 'Thu', 'Fri', 'Sat' ] ]

console.log(allDays); // Mon,Tues,WedThu,Fri,Sat
console.log(allDay); // [ [ 'Mon', 'Tues', 'Wed' ], [ 'Thu', 'Fri', 'Sat' ] ]

//Spread Operator
const allDay_2 = [...days, ...otherdays, "Sun"];
console.log(allDay_2); //[ 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

//object

const ob = {
  first: "hi",
  second: "hello",
};

const ab = {
  third: "bye",
};

//Spread Operator
const add = { ...ob, ...ab };
console.log(add); // { first: 'hi', second: 'hello', third: 'bye' }

//Spread Operator
const shi = (something, args) => console.log(...args);
