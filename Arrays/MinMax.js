function generateRandomNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 900) + 100); // Generate 3-digit numbers
    }
    return numbers;
}

function findSecondLargestAndSmallest(arr) {
    let firstMax = -Infinity, secondMax = -Infinity;
    let firstMin = Infinity, secondMin = Infinity;
    
    for (let num of arr) {
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num !== firstMax) {
            secondMax = num;
        }

        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        } else if (num < secondMin && num !== firstMin) {
            secondMin = num;
        }
    }
    
    return { secondLargest: secondMax, secondSmallest: secondMin };
}

let randomNumbers = generateRandomNumbers(10);
console.log("Generated Numbers:", randomNumbers);

let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(randomNumbers);
console.log("Second Largest Number:", secondLargest);
console.log("Second Smallest Number:", secondSmallest);
