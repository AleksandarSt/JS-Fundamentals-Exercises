/**
 * Created by Aleksandar on 08/06/2017.
 */
//1.	Print an Array with a given Delimiter
function printArrayWithDelimiter(arr) {
    let delimiter=arr[arr.length-1];
    arr.pop();

    return arr.join(delimiter)
}

console.log(printArrayWithDelimiter(['one', 'two', '-']));