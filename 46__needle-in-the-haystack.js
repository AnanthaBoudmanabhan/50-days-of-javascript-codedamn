//INSTRUCTIONS:
/*
Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) should return "found the needle at position 5"
*/

function findNeedle(haystack) {
    // your code here

    //Solution 1
    // const index = haystack.findIndex(item => item === "needle");

    //Solution 2
    const index = haystack.indexOf("needle");

    return `found the needle at position ${index}`;
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));

console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']));