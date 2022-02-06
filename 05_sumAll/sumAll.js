const sumAll = function(valueOne, valueTwo) {
    sum = 0
    let lowerValue = 0;
    let higherValue = 0;

    if (valueOne < valueTwo) {
        lowerValue = valueOne;
        higherValue = valueTwo;
    } else {
        lowerValue = valueTwo;
        higherValue = valueOne;
    }

    if ((typeof(valueTwo) === "number") && (typeof(valueOne) === "number")) {
        if ((valueOne >= 0) && (valueTwo >= 0)) {
            for (let i = lowerValue; i <= higherValue; i++) {
                sum += i;
            }
        } else {
            sum = "ERROR";
        }
    } else {
        sum = "ERROR";
    };
    return sum;
}


// Do not edit below this line
module.exports = sumAll;