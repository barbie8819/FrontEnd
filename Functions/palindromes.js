function isPalindrome(num) {
    let original = num.toString();
    let reversed = original.split('').reverse().join('');
    return original === reversed;
}

function checkPalindromes(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log(`${num1} and ${num2} are both palindromes.`);
    } else if (isPalindrome(num1)) {
        console.log(`${num1} is a palindrome, but ${num2} is not.`);
    } else if (isPalindrome(num2)) {
        console.log(`${num2} is a palindrome, but ${num1} is not.`);
    } else {
        console.log(`Neither ${num1} nor ${num2} is a palindrome.`);
    }
}

// Example usage
const num1 = 121;
const num2 = 123;
checkPalindromes(num1, num2);
