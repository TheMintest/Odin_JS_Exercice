const reverseString = function(string) {
    let length = string.length;
    let output = '';
    let lastChar = '';
    for (let i = length; i >= 0; i--) {
        lastChar = string.charAt(i);
        output = output.concat(lastChar);
    }
    return output;

};

// Do not edit below this line
module.exports = reverseString;