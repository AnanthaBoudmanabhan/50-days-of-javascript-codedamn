//INSTRUCTIONS:
/*
Function which returns a random number in the given range
Create a function which returns a random number in the given range of values both inclusive
*/

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    // write your solution here

    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1) + rangeStart);
}

console.log(randomNumberGeneratorInRange(10, 50));

console.log(randomNumberGeneratorInRange(100, 200));

