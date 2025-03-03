const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (isNaN(n) || n < 2) {
    console.log("Usage: node primeFactors.js <integer >= 2>");
    process.exit(1);
}

function primeFactors(num) {
    let factors = [];

    while (num % 2 === 0) {
        factors.push(2);
        num /= 2;
    }

    for (let i = 3; i * i <= num; i += 2) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }

    if (num > 2) {
        factors.push(num);
    }

    return factors;
}

console.log(`Prime factors of ${n} are: ${primeFactors(n).join(', ')}`);
