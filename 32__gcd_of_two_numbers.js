//INSTRUCTIONS:
/*
Write a program to find the greatest common divisor (gcd) of two positive numbers.
The greatest common divisor (GCD), also called the greatest common factor, of two numbers is the largest number that divides them both. For instance, the greatest common factor of 20 and 15 is 5, since 5 divides both 20 and 15 and no larger number has this property.
*/

function gcd(a, b) {
    // write your code here
    const [greatest, smallest] = [...arguments].sort();
    let factorsOfGreatestNumber = getFactors(greatest).reverse();
    let factorsOfSmallestNumber = getFactors(smallest).reverse();
    if (greatest % smallest === 0)
        return smallest;

    let commonFactors = factorsOfSmallestNumber.filter(num => factorsOfGreatestNumber.includes(num));
    return commonFactors[0];
}

function getFactors(num) {
    const factors = [1];
    for (let i = 2; i < num; i++)
        if (num % i === 0)
            factors.push(i);
    factors.push(num);
    return factors;
}

const a = 2154
const b = 458

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));