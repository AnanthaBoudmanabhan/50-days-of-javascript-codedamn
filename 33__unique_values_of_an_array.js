//INSTRUCTIONS:
/*
Write a program to print unique values from an array
Input
    const arrOfNum = [1, 2, 2, 4, 5, 6, 6]
Output
    [1, 2, 4, 5, 6]
*/


function set(arrOfNum) {
    // write your code here

    //Solution 1
    return [...new Set(arrOfNum)];

    //Solution 2
    // return arrOfNum.filter((item, index, array) => array.lastIndexOf(item) == index);
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log("result is + " + set(arrOfNum));