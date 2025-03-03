const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Usage: node leapYear.js <year>");
    process.exit(1);
}

const year = parseInt(args[0], 10);

if (isNaN(year) || year < 1000 || year > 9999) {
    console.log("Invalid input! Please enter a 4-digit year (e.g., 2000, 2024).");
    process.exit(1);
}

const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(`Year ${year} is ${isLeapYear ? "a Leap Year" : "not a Leap Year"}.`);
