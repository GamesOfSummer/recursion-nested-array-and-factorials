import { consoleBuffer, consoleEnd, consoleStart, formatOutput } from "./helpers";



function nestedArrayViaRecursion(array: any[]) {
    
    if(array.length < 0)
    {
        return 0;
    }


    const sum = array.pop();
    return sum + nestedArrayViaRecursion(array);

 
}



function factorialViaRecursion(array: number[], index : number) {
    
    if(index > array.length)
    {
        return array;
    }
    else 
    {

        for(let i = index; i > 0; i--)
        {
            if ((array[i] < array[i - 1]))
            {
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

formatOutput(nestedArrayViaRecursion([1,2,3]), 6);
formatOutput(nestedArrayViaRecursion([1,[2],3]), 6);

consoleEnd();
consoleBuffer();

export {};
