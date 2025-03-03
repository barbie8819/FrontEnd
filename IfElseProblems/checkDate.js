const args = process.argv.slice(2);
console.log("Arguments received:", args);

if (args.length !== 2) {
    console.log("Usage: node checkDate.js <day> <month>");
    process.exit(1);
}

const day = parseInt(args[0], 10);
const month = parseInt(args[1], 10);

if (isNaN(day) || isNaN(month) || month < 1 || month > 12 || day < 1 || day > 31) {
    console.log("Invalid input! Please enter a valid day (1-31) and month (1-12).");
    process.exit(1);
}

const isInRange = (month === 3 && day >= 20) || 
                  (month > 3 && month < 6) || 
                  (month === 6 && day <= 20);

console.log("Result:", isInRange);
