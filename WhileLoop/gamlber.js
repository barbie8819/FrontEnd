let money = 100;
const goal = 200;
let bets = 0;
let wins = 0;

console.log("Gambling starts with Rs 100, goal is Rs 200...");

while (money > 0 && money < goal) {
    bets++;
    let betResult = Math.random() < 0.5 ? -1 : 1;
    
    if (betResult === 1) {
        wins++;
        money++;
    } else {
        money--;
    }
    
    console.log(`Bet ${bets}: Money = Rs ${money}`);
}

console.log("Game Over!");
console.log(`Total Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);
if (money === 0) {
    console.log("Gambler went broke!");
} else {
    console.log("Gambler reached the goal!");
}
