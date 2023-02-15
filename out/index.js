"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
function nestedArrayViaRecursion(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        var currentValue = array[i];
        if (typeof currentValue !== 'number') {
            total += nestedArrayViaRecursion(array);
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
// formatOutput(nestedArrayViaRecursion([1, 2, 3]), 6);
(0, helpers_1.formatOutput)(nestedArrayViaRecursion([1, [2], 3]), 6);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
//# sourceMappingURL=index.js.map