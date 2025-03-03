const prompt = require("prompt-sync")(); // For user input

console.log("Select an option for unit conversion:");
console.log("1 - Feet to Inch");
console.log("2 - Feet to Meter");
console.log("3 - Inch to Feet");
console.log("4 - Meter to Feet");

const option = parseInt(prompt("Enter your choice (1-4): "));
const value = parseFloat(prompt("Enter the value to convert: "));

// Validate input
if (isNaN(option) || isNaN(value)) {
    console.log("Invalid input! Please enter a valid option (1-4) and a numeric value.");
    process.exit(1);
}

// Perform conversion using switch-case
switch (option) {
    case 1:
        console.log(`${value} Feet = ${value * 12} Inches`);
        break;
    case 2:
        console.log(`${value} Feet = ${(value * 0.3048).toFixed(4)} Meters`);
        break;
    case 3:
        console.log(`${value} Inches = ${(value / 12).toFixed(4)} Feet`);
        break;
    case 4:
        console.log(`${value} Meters = ${(value / 0.3048).toFixed(4)} Feet`);
        break;
    default:
        console.log("Invalid option! Please choose 1, 2, 3, or 4.");
}
