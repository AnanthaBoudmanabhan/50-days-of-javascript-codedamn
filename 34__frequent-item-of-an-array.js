//INSTRUCTIONS:
/*
Write a program to find the most frequent item of an array
Input
    const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Output
    a 5
*/

function mostFreq(arr) {
    // write your code here
    const dic = {};
    arr.forEach(item => dic[item] = dic[item] ? dic[item] + 1 : 1)
    let result = 0;
    let count = 0;
    for (let item in dic) {
        if (dic[item] > count) {
            result = item;
            count = dic[item];
        }
    }
    return `${result} ${count}`;
}

const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(mostFreq(arr));