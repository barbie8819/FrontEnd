const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Usage: node numberToWord.js <single-digit-number>");
    process.exit(1);
}

const num = parseInt(args[0]);

if (isNaN(num) || num < 0 || num > 9) {
    console.log("Please enter a valid single-digit number (0-9).");
    process.exit(1);
}

const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

console.log(`The number ${num} in words is: ${numberWords[num]}`);
