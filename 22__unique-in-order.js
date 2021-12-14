//INSTRUCTIONS:
/*
Unique In Order
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

The argument can contain a string or an array

For example: uniqueInOrder([1,2,2,3,3]) should return [1,2,3]

uniqueInOrder('ABBCcAD') should return ['A', 'B', 'C', 'c', 'A', 'D']
*/

let uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    const sequence = Array.isArray(iterable) ? iterable : [...iterable];
    const result = [];
    sequence.forEach(item => {
        if (result[result.length - 1] !== item)
            result.push(item);
    })
    return result;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));