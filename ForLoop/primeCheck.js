const args = process.argv.slice(2);
const num = parseInt(args[0]);

if (isNaN(num) || num <= 1) {
    console.log("Please enter a valid positive integer greater than 1.");
    process.exit(1);
}

let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

// Print result
if (isPrime) {
    console.log(`${num} is a Prime Number.`);
} else {
    console.log(`${num} is NOT a Prime Number.`);
}
