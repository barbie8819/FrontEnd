let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * (999 - 100 + 1)) + 100); // Generates numbers between 100 and 999
}

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Generated Numbers:", numbers);
console.log("Minimum Value:", min);
console.log("Maximum Value:", max);
