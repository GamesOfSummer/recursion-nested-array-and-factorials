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

function factorialViaRecursion(index: number) {
    if (index <= 1) {
        return index;
    } else {
        return index * factorialViaRecursion(index - 1);
    }
}

consoleStart();

validateFxn(nestedArrayViaRecursion([1, 2, 3]), 6);
validateFxn(nestedArrayViaRecursion([1, [2], 3]), 6);
validateFxn(nestedArrayViaRecursion([[[[[[[6]]]]]]]), 6);

validateFxn(factorialViaRecursion(1), 1);
validateFxn(factorialViaRecursion(6), 720);

consoleEnd();
consoleBuffer();

export {};
