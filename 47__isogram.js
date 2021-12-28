//INSTRUCTIONS:
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
Note : An empty string is also an isogram
*/

function isIsogram(str) {
    // your code here
    if (str === "")
        return true;

    return [...str.toLowerCase()].every((char, index, array) => array.indexOf(char) === index);
}


console.log(isIsogram("isogram"));

console.log(isIsogram("abracadabra"));