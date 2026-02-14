//find the second largest of array

const arr = [-4, 5, -1, 7, -10, 9, 1,110,  10]

function secLargest(arr) {
    let first = 0;
    let second = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first
            first = arr[i];
        }
        else if (arr[i] > second) {
            second = arr[i];
        }
    }
    return second
}

console.log(secLargest(arr))

