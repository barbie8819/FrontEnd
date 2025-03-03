const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Usage: node placeValue.js <number>");
    process.exit(1);
}

const number = parseInt(args[0]);

if (isNaN(number) || ![1, 10, 100, 1000, 10000, 100000, 1000000].includes(number)) {
    console.log("Please enter a valid number like 1, 10, 100, 1000, etc.");
    process.exit(1);
}

let placeValue;
switch (number) {
    case 1: placeValue = "Unit"; break;
    case 10: placeValue = "Ten"; break;
    case 100: placeValue = "Hundred"; break;
    case 1000: placeValue = "Thousand"; break;
    case 10000: placeValue = "Ten Thousand"; break;
    case 100000: placeValue = "Lakh"; break;
    case 1000000: placeValue = "Ten Lakh"; break;
    default:
        console.log("Invalid input!");
        process.exit(1);
}

console.log(`The place value of ${number} is: ${placeValue}`);
