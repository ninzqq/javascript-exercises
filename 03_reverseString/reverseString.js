const reverseString = function(str) {
    let splittedStr = str.split('');
    let reversedStr = '';

    for (let i = splittedStr.length - 1; i >= 0; i--) {
        reversedStr = reversedStr.concat(splittedStr[i]);
    }

    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
