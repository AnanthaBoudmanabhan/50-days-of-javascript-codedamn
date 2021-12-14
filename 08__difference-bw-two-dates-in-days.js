//INSTRUCTIONS:
/*
Write a function which accepts two valid dates and returns the difference between them as number of days
    - The difference between 2 dates in JavaScript will give the time difference in milliseconds
    - Time difference can be converted in to days by dividing the 24Hrs time in milliseconds
*/

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    const day1Arr = dateText1.split("/");
    const day2Arr = dateText2.split("/");
    const day1 = new Date(day1Arr[2], day1Arr[0] - 1, day1Arr[1]);
    const day2 = new Date(day2Arr[2], day2Arr[0] - 1, day2Arr[1]);
    const diffInMillis = day2 - day1;
    return diffInMillis / DAY_IN_MILLISECONDS;
}

console.log(`Days difference: ${getDaysBetweenDates('11/10/2021', '11/12/2021')}`)
