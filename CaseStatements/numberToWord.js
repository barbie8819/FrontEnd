const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Usage: node numberToWord.js <single-digit-number>");
    process.exit(1);
}

const number = parseInt(args[0]);

if (isNaN(number) || number < 0 || number > 9) {
    console.log("Please enter a valid single-digit number (0-9).");
    process.exit(1);
}

let numberWord;
switch (number) {
    case 0: numberWord = "Zero"; break;
    case 1: numberWord = "One"; break;
    case 2: numberWord = "Two"; break;
    case 3: numberWord = "Three"; break;
    case 4: numberWord = "Four"; break;
    case 5: numberWord = "Five"; break;
    case 6: numberWord = "Six"; break;
    case 7: numberWord = "Seven"; break;
    case 8: numberWord = "Eight"; break;
    case 9: numberWord = "Nine"; break;
    default:
        console.log("Invalid input!");
        process.exit(1);
}

// Output the result
console.log(`The number in words is: ${numberWord}`);
