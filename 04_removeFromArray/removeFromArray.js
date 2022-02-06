const removeFromArray = function(array) {
    for (a = 0; a <= arguments.length; a++) {
        for (i = 0; i <= array.length; i++) {
            if (array[i] === arguments[a]) {
                array.splice(i, 1);
                break;
            }
        };
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;