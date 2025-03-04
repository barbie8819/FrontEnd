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

function sortAndFindSecondLargestAndSmallest(arr) {
    arr.sort((a, b) => a - b);
    return { secondSmallest: arr[1], secondLargest: arr[arr.length - 2] };
}

let randomNumbers = generateRandomNumbers(10);
console.log("Generated Numbers:", randomNumbers);

let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(randomNumbers);
console.log("Without Sorting - Second Largest:", secondLargest);
console.log("Without Sorting - Second Smallest:", secondSmallest);

let sortedResults = sortAndFindSecondLargestAndSmallest([...randomNumbers]);
console.log("After Sorting - Second Largest:", sortedResults.secondLargest);
console.log("After Sorting - Second Smallest:", sortedResults.secondSmallest);
