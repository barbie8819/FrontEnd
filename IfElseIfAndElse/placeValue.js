// Read command-line argument
const args = process.argv.slice(2);

// Validate input
if (args.length !== 1) {
    console.log("Usage: node placeValue.js <number>");
    process.exit(1);
}

const num = parseInt(args[0]);

// Validate if input is a valid power of 10
if (isNaN(num) || !/^(1|10|100|1000|10000|100000|1000000|10000000|100000000)$/.test(num.toString())) {
    console.log("Please enter a valid number like 1, 10, 100, 1000, etc.");
    process.exit(1);
}

// Map numbers to their place values
const placeValues = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh",
    1000000: "Million",
    10000000: "Crore",
    100000000: "Billion"
};

// Display the place value
console.log(`The place value of ${num} is: ${placeValues[num]}`);
