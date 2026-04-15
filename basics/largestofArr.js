//find largest element in array 

const arr = [-4, -5, -7, -1, -77,  -10, -9, -15, -10]



function largestArr(arr) {
    let largest = -Infinity;
    for(let i = 0; i <= arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest
}

console.log(largestArr(arr))