//INSTRUCTIONS:
/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/

function getMiddle(s) {
    // your code here
    const length = s.length;

    if (length === 1)
        return s;

    let middle = length / 2;
    if (length % 2 === 0)
        return s.slice(middle - 1, middle + 1);
    else
        return s[Math.floor(middle)];
}

console.log(getMiddle("testing"));

console.log(getMiddle("middle"));

console.log(getMiddle("A"));