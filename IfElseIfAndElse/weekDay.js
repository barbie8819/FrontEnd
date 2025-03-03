const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Usage: node weekday.js <number (1-7)>");
    process.exit(1);
}

const num = parseInt(args[0]);

if (isNaN(num) || num < 1 || num > 7) {
    console.log("Please enter a valid number between 1 and 7.");
    process.exit(1);
}

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(`The day corresponding to number ${num} is: ${weekdays[num - 1]}`);
