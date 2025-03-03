const args = process.argv.slice(2);
const start = parseInt(args[0]);
const end = parseInt(args[1]);

if (isNaN(start) || isNaN(end) || start < 2 || end < start) {
    console.log("Usage: node primeRange.js <start> <end>");
    console.log("Please enter a valid range where start >= 2 and end > start.");
    process.exit(1);
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(`Prime numbers between ${start} and ${end}:`);
for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
        process.stdout.write(num + " ");
    }
}
console.log();
