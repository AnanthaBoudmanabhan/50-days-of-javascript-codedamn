//INSTRUCTIONS:
/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

function sumTwoSmallestNumbers(numbers) {
    //Code below
    numbers.sort((a, b) => a - b);
    const [first, second] = numbers;
    return first + second;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));