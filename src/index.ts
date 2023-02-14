import { consoleBuffer, consoleEnd, consoleStart } from "./helpers";



function crudeInsertionSort(array: number[]) {
    
    for(let i = 0; i < array.length; i++)
    {
        for(let j = 0; j < array.length; j++)
        {
            if(array[i] < array[j])
            {
                const greaterValue = array[i];
                const lesserValue = array[j];
            
                array[i] = lesserValue;
                array[j] = greaterValue;
            }
        }   
    }

    return array;

}



function recursionInsertionSort(array: number[], index : number) {
    
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

        return recursionInsertionSort(array, index + 1);
    }
}


consoleStart();

console.log(crudeInsertionSort([6,3,2,0,13]));
console.log(crudeInsertionSort([36,110,42,2]));

console.log(recursionInsertionSort([6,3,2,0,13], 0));
console.log(recursionInsertionSort([36,110,42,2], 0));

consoleEnd();
consoleBuffer();

export {};
