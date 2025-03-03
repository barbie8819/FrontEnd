const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (isNaN(n) || n < 0) {
    console.log("Usage: node factorial.js <non-negative integer>");
    process.exit(1);
}

function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(`Factorial of ${n} is: ${factorial(n)}`);
