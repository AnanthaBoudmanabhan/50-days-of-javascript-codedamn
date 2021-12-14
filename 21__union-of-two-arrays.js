//INSTRUCTIONS:
/*
Union of Two Arrays
Write the code for the function which returns the the union of the two given arrays
*/

const unionOfArrays = (arr1, arr2) => {
    // code below here

    //Solution 1
    return [...new Set([...arr1, ...arr2])];

    //Solution 2
    const res = [];
    // const concatedArray = [...arr1, ...arr2];
    // concatedArray.forEach(item => {
    //     if (!res.includes(item))
    //         res.push(item);
    // })
    // return res;
};

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);