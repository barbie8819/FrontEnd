const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let headsCount = 0, tailsCount = 0;

console.log("Flipping a coin until either Heads or Tails wins 11 times...");

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random() < 0.5 ? 'Heads' : 'Tails';
    if (flip === 'Heads') {
        headsCount++;
    } else {
        tailsCount++;
    }
    console.log(`Flip: ${flip} | Heads: ${headsCount}, Tails: ${tailsCount}`);
}

if (headsCount === 11) {
    console.log("Heads wins!");
} else {
    console.log("Tails wins!");
}

rl.close();
