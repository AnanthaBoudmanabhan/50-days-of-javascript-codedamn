//INSTRUCTIONS:
/*
Write a function which can convert the time input given in 12 hours format to 24 hours format
    - The check for 'AM' and 'PM' can be verified using endsWith String method
    - An extra 0 would be needed if the hours have single digit
*/

const time = '12:33PM';

function convertTo24HrsFormat(time) {
    // write your solution here
    const splitArr = time.replace("AM", "").replace("PM", "").split(":");
    const hour = +splitArr[0];
    const minutes = +splitArr[1];
    let convertedHour = 0;
    if (time.includes("AM"))
        if (hour == "12")
            convertedHour = 0;
        else
            convertedHour = hour;
    else if (time.includes("PM"))
        if (hour == "12")
            convertedHour = 12;
        else
            convertedHour = hour + 12;
    splitArr[0] = formatTime(convertedHour);
    splitArr[1] = formatTime(minutes);
    return splitArr.join(":");
}

function formatTime(t) {
    return t < 10 ? '0' + t : t;
}


console.log(`Converted time: ${convertTo24HrsFormat(time)}`)