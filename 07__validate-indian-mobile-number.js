//INSTRUCTIONS:
/*
Create a regular expression to validate if the given input is valid Indian mobile number or not
    - Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits
    - Regulartest method of regular expression can be used to validate if the mobile number pattern matches or not
*/

const number = '99876543210';

function validateMobile(number) {
    // write your solution here
    const pattern = /^(\+91|0)?\s?[0-9]{10}$/;
    return pattern.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)

