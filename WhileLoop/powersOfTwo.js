const n = parseInt(process.argv[2], 10);
if (isNaN(n)) {
    console.log("Usage: node PowerOfTwoTable.js <n>");
    process.exit(1);
}

let power = 0;
let value = 1; 

console.log("Power | Value");
console.log("----------------");

while (power <= n && value <= 256) {
    console.log(`  ${power}    |   ${value}`);
    power++;
    value *= 2;
}
