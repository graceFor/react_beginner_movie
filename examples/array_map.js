// Array Map

const days = ["Mon", "Tue", "Wed", "Thurs", "Fri"];

const smilingDays = days.map((a, index) => `#${index + 1} ${a}`);

console.log(smilingDays);

// Another method
const addNumber = (day, index) => `#${index + 1} ${day}`;

const NumDays = days.map(addNumber);

console.log(NumDays);
