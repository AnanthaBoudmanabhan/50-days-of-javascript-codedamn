//INSTRUCTIONS:
/*
Write a program to reverse a string
    - String can be reversed by iterating it and storing it in reverse order
    - String can also be reversed by converting it to array, then joining it after reversing
*/

const str = "JavaScript is awesome";

function reverseAString(str) {
    // write your solution here
    return str.split("").reverse().join("");
}
console.log(`Reversed string is: ${reverseAString(str)}`);