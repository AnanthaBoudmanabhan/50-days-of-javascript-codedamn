//INSTRUCTIONS:
/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
    //code your magic here
    let scoring = 0;
    let highestScoringWord = '';
    x.toLowerCase().split(" ").forEach(str => {
        let strScoring = [...str].reduce((acc, l) => {
            let alphabetPosition = l.charCodeAt(0) - 'a'.charCodeAt(0) + 1
            return acc + alphabetPosition;
        }, 0);
        if (strScoring > scoring) {
            scoring = strScoring;
            highestScoringWord = str;
        }
    })
    return highestScoringWord;
}

console.log(high('man i need a taxi up to ubud'));

console.log(high('what time are we climbing up the volcano'));