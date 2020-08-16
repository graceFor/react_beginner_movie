// Array Filter

const numbers = [2, 45, 5, 4, 6, 55, 34, 76, 1, 23, 676, 35, 65];

const biggeThan15 = numbers.filter((number) => number > 15);

console.log(biggeThan15);

// Another method

const testCondition = (number) => number > 15;
const bigger = numbers.filter(testCondition);
console.log(bigger);
