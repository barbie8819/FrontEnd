const args = process.argv.slice(2);
const n = parseInt(args[0]);

if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
    process.exit(1);
}

let harmonic = 0;
for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}

console.log(`Harmonic number H(${n}) = ${harmonic.toFixed(6)}`);
