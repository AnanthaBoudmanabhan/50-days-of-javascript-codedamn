//INSTRUCTIONS:
/*
You will be given a number and you will need to return it as a string in Expanded Form.
For example:
    expandedForm(12); // Should return '10+2'
    expandedForm(42); // Should return '40+2'
*/
function expandedForm(num) {
    // Your code here
    let result = "";
    let str = num.toString();
    let length = str.length;
    let splitArr = [...str].map((char, index) => char * (10 ** (length - 1 - index)));
    splitArr.forEach(n => {
        if (!result)
            result += n;
        else if (n !== 0)
            result += `+${n}`;

    })
    return result;
}

console.log(expandedForm(734));