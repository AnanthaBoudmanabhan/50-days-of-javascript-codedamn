//INSTRUCTIONS:
/*
Count the number of divisors of a positive integer n.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

*/

function getDivisorsCnt(num) {
    // code below
    let count = 0;
    for (let i = 1; i <= num; i++)
        if (num % i === 0)
            count++;

    return count;
}

console.log(getDivisorsCnt(10));

console.log(getDivisorsCnt(11));

console.log(getDivisorsCnt(54));