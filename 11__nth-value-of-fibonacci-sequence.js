//INSTRUCTIONS:
/*
Return the N-th value of the Fibonacci sequence
*/

function fibonacci(n) {
    // write your solution here
    let series = [0, 1];
    for (let i = 2; i <= n; i++) {
        series[i] = series[i - 2] + series[i - 1];
    }
    return series[n];
}


console.log(fibonacci(1));

console.log(fibonacci(7));

console.log(fibonacci(21));

