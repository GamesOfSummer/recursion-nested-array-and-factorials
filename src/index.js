"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function nestedArrayViaRecursion(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        var currentValue = array[i];
        if (typeof currentValue !== 'number') {
            total += nestedArrayViaRecursion(currentValue);
        }
        else {
            total += currentValue;
        }
    }
    return total;
}
function factorialViaRecursion(array, index) {
    if (index > array.length) {
        return array;
    }
    else {
        for (var i = index; i > 0; i--) {
            if (array[i] < array[i - 1]) {
                var lesserValue = array[i];
                var greaterValue = array[i - 1];
                array[i] = greaterValue;
                array[i - 1] = lesserValue;
            }
        }
        return factorialViaRecursion(array, index + 1);
    }
}
(0, helpers_1.consoleStart)();
(0, helpers_1.validateFxn)(nestedArrayViaRecursion([1, 2, 3]), 6);
(0, helpers_1.validateFxn)(nestedArrayViaRecursion([1, [2], 3]), 6);
(0, helpers_1.validateFxn)(nestedArrayViaRecursion([[[[[[[6]]]]]]]), 6);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
