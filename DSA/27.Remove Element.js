var removeElement = function (nums, val) {

    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            // nums.pop(val)
            
            nums[x] = nums[i]
            x = x + 1
        }
    }
    return x 

};


//logic
// we will use two pointers one to keep track of the non val elements
//  and other to iterate through the array and
// whenever we find a non val element we will swap it with the element at the first pointer and
//  then move the first pointer to the next position and 
// repeat the process until we reach the end of the array.

//time complexity is O(n) and space complexity is O(1) as we are not using any extra space.

//deep dive into the code with proper line by line explanation and dry run of the code with example input and output.

// let nums = [3, 2, 2, 3]
// val = 3
// x = 0
// i = 0
// nums[0] = 3 => do nothing
// i = 1
// nums[1] = 2 => nums[0] = 2, x = 1
// nums = [2, 2, 2, 3]
// i = 2
// nums[2] = 2 => nums[1] = 2, x = 2
// nums = [2, 2, 2, 3]
// i = 3
// nums[3] = 3 => do nothing
// x = 2 => return 2 and nums = [2, 2, 2, 3] => first two elements are non val elements and rest are val elements.
