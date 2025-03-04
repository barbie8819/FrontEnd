function findRepeatedDigitsInRange() {
    let repeatedDigits = [];
    
    for (let i = 10; i <= 100; i++) {
        let numStr = i.toString();
        if (numStr[0] === numStr[1]) {
            repeatedDigits.push(i);
        }
    }
    
    return repeatedDigits;
}


const repeatedNumbers = findRepeatedDigitsInRange();
console.log("Numbers with repeated digits:", repeatedNumbers);
