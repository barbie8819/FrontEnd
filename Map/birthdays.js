function generateBirthMonths() {
    let birthMonths = {};
    
    for (let i = 1; i <= 12; i++) {
        birthMonths[i] = [];
    }
    
    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1;
        birthMonths[month].push(`Person${i}`);
    }
    
    return birthMonths;
}

function printBirthMonthGroups(birthMonths) {
    console.log("Individuals with the same birth month:");
    for (let month in birthMonths) {
        console.log(`Month ${month}:`, birthMonths[month].join(", "));
    }
}

let birthMonthData = generateBirthMonths();
printBirthMonthGroups(birthMonthData);
