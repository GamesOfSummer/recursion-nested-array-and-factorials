"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function nestedArrayViaRecursion(array) {
    if (array.length < 0) {
        return 0;
    }
    var sum = array.pop();
    return sum + nestedArrayViaRecursion(array);
}
function factorialViaRecursion(array, index) {
    if (index > array.length) {
        return array;
    }
    else {
        for (var i = index; i > 0; i--) {
            if ((array[i] < array[i - 1])) {
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
(0, helpers_1.formatOutput)(nestedArrayViaRecursion([1, 2, 3]), 6);
(0, helpers_1.formatOutput)(nestedArrayViaRecursion([1, [2], 3]), 6);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
