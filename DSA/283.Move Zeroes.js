var moveZeroes = function (nums) {

    let x = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i]
            x = x + 1
        }

    }
    while (x < nums.length) {
        nums[x] = 0
        x = x + 1
    }
    return x;
};


//logic
// we will use two pointers one to keep track of the non zero elements
//  and other to iterate through the array and
// whenever we find a non zero element we will swap it with the element at the first pointer and
//  then move the first pointer to the next position and 
// repeat the process until we reach the end of the array.

//time complexity is O(n) and space complexity is O(1) as we are not using any extra space.


//deep dive into the code with proper line by line explanation and dry run of the code with example input and output.

// let nums = [0, 1, 0, 3, 12]  
// x = 0
// i = 0
// nums[0] = 0 => do nothing
// i = 1    
// nums[1] = 1 => nums[0] = 1, x = 1
// nums = [1, 1, 0, 3, 12]
// i = 2    
// nums[2] = 0 => do nothing
// i = 3
// nums[3] = 3 => nums[1] = 3, x = 2
// nums = [1, 3, 0, 3, 12]
// i = 4
// nums[4] = 12 => nums[2] = 12, x = 3
// nums = [1, 3, 12, 3, 12]
// x = 3
// while x < nums.length => nums[3] = 0, x = 4
// nums = [1, 3, 12, 0, 12]
// while x < nums.length => nums[4] = 0, x = 5
// nums = [1, 3, 12, 0, 0]


