function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDiceUntilMaxCount() {
    let dieRolls = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxRolls = 10;
    let reachedMax = false;

    while (!reachedMax) {
        let roll = rollDie();
        dieRolls[roll]++;

        if (dieRolls[roll] === maxRolls) {
            reachedMax = true;
        }
    }

    let maxNumber = Object.keys(dieRolls).reduce((a, b) => (dieRolls[a] > dieRolls[b] ? a : b));
    let minNumber = Object.keys(dieRolls).reduce((a, b) => (dieRolls[a] < dieRolls[b] ? a : b));

    console.log("Final Die Roll Counts:", dieRolls);
    console.log("Number that appeared maximum times:", maxNumber);
    console.log("Number that appeared minimum times:", minNumber);
}


rollDiceUntilMaxCount();
