"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function crudeInsertionSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                var greaterValue = array[i];
                var lesserValue = array[j];
                array[i] = lesserValue;
                array[j] = greaterValue;
            }
        }
    }
    return array;
}
function recursionInsertionSort(array, index) {
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
        return recursionInsertionSort(array, index + 1);
    }
}
(0, helpers_1.consoleStart)();
console.log(crudeInsertionSort([6, 3, 2, 0, 13]));
console.log(crudeInsertionSort([36, 110, 42, 2]));
console.log(recursionInsertionSort([6, 3, 2, 0, 13], 0));
console.log(recursionInsertionSort([36, 110, 42, 2], 0));
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
