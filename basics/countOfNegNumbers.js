//write a function that returns negative numbers in array 

const arr = [-4, 5, 7, -1, 7, 0, -10, 9, 15, 10]
const result = []
let count = 0

function findNegative(arr) {
    for (let i = 0; i <= arr.length - 1
        ; i++) {
        if (arr[i] < 0) {
            count += 1
            result.push(arr[i])
            // console.log(arr[i])
        }

    }
    console.log(result , "with count", count)
}


findNegative(arr)