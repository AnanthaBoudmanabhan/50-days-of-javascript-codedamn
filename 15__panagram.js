//INSTRUCTIONS:
/*
Determine if a sentence is a pangram
Instructions
Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:

The quick brown fox jumps over the lazy dog.

The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.
*/

const sentence = "The quick brown fox jumps over the lazy dog";

const isPangram = (input) => {
    // Code here

    //Solution 1
    // const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // return alphabets.every(letter => input.split(" ").map(item => item.toLowerCase()).join("").includes(letter));

    //Solution 2
    const characters = [...input];
    return characters.every(char => {
        let code = char.charCodeAt(0);
        return (code >= 65 && code <= 90) || (code >= 97 && code <= 122) || code === 32;
    });
}

console.log(isPangram(sentence));