import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers';

function nestedArrayViaRecursion(array: any[]): number {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];

        if (typeof currentValue !== 'number') {
            total += nestedArrayViaRecursion(currentValue);
        } else {
            total += currentValue;
        }
    }
    return total;
}

function factorialViaRecursion(array: number[], index: number) {
    if (index > array.length) {
        return array;
    } else {
        for (let i = index; i > 0; i--) {
            if (array[i] < array[i - 1]) {
                const lesserValue = array[i];
                const greaterValue = array[i - 1];

                array[i] = greaterValue;
                array[i - 1] = lesserValue;
            }
        }

        return factorialViaRecursion(array, index + 1);
    }
}

consoleStart();

validateFxn(nestedArrayViaRecursion([1, 2, 3]), 6);
validateFxn(nestedArrayViaRecursion([1, [2], 3]), 6);
validateFxn(nestedArrayViaRecursion([[[[[[[6]]]]]]]), 6);

consoleEnd();
consoleBuffer();

export {};
