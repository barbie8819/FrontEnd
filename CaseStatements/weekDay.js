const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Usage: node weekDay.js <number (1-7)>");
    process.exit(1);
}

const dayNumber = parseInt(args[0]);

if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
    console.log("Please enter a valid number between 1 and 7.");
    process.exit(1);
}

let weekDay;
switch (dayNumber) {
    case 1: weekDay = "Sunday"; break;
    case 2: weekDay = "Monday"; break;
    case 3: weekDay = "Tuesday"; break;
    case 4: weekDay = "Wednesday"; break;
    case 5: weekDay = "Thursday"; break;
    case 6: weekDay = "Friday"; break;
    case 7: weekDay = "Saturday"; break;
    default:
        console.log("Invalid input!");
        process.exit(1);
}

// Output the result
console.log(`The corresponding weekday is: ${weekDay}`);
