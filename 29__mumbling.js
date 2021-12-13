//INSTRUCTIONS:
/*
Mumbling
Each char becomes n*chars where n is the index + 1, and the first char is capitalized divided by - instead of space.

Only alphabets are passed as arguments for the accum(s) funciton

Example: accum("ZpglnRxqenU") should return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
*/

function accum(s) {
    // your code goes below
    let result = "";
    [...s].map((char, index) => {
        let currStr = char.toLowerCase();
        let strArr = Array(index + 1).fill(currStr);
        strArr[0] = strArr[0].toUpperCase();
        if (result)
            result += "-"
        result += strArr.join("");
    })
    return result;
}

console.log(accum("NyffsGeyylB"));