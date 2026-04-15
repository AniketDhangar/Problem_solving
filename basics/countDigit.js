//find count of digits in number


let nums = 1e21
// let nums = "Demo"
function countDigit(nums) {

    if (nums == 0) return 1
    // convert neg to pos
    nums = Math.abs(nums).toString().replace(".","")

    let count = 0;
    while (nums > 0) {
        nums = Math.floor(nums / 10)
        count++
    }
    return count;
}

console.log(countDigit(nums))