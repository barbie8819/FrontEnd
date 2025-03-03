const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log("Usage: node arithmeticOps.js <a> <b> <c>");
    process.exit(1);
}

const a = parseFloat(args[0]);
const b = parseFloat(args[1]);
const c = parseFloat(args[2]);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Please enter valid numbers.");
    process.exit(1);
}

const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;

const results = [
    { expression: "a + b * c", value: result1 },
    { expression: "a % b + c", value: result2 },
    { expression: "c + a / b", value: result3 },
    { expression: "a * b + c", value: result4 }
];

// Find the maximum and minimum
const maxResult = results.reduce((max, current) => (current.value > max.value ? current : max));
const minResult = results.reduce((min, current) => (current.value < min.value ? current : min));

// Display results
console.log(`Results of arithmetic operations:`);
results.forEach(res => console.log(`${res.expression} = ${res.value}`));

console.log(`\nMaximum value: ${maxResult.value} (Expression: ${maxResult.expression})`);
console.log(`Minimum value: ${minResult.value} (Expression: ${minResult.expression})`);
