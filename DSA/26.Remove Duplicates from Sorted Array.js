

var removeDuplicates = function (nums) {

    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x += 1;
            nums[x] = nums[i]
        }

    }
    return x + 1
    console.log(nums)// return x + 1 => as x is index of last unique element and we need to return count of unique elements which is index + 1.
};


//logic
// we will use two pointers one to keep track of the unique elements
//  and other to iterate through the array and
// whenever we find a unique element we will swap it with the element at the first pointer and
//  then move the first pointer to the next position and 
// repeat the process until we reach the end of the array.

//time complexity is O(n) and space complexity is O(1) as we are not using any extra space.

//deep dive into the code with proper line by line explanation and dry run of the code with example input and output.

// let nums = [1, 1, 2]
// x = 0
// i = 0
// nums[0] = 1 => do nothing
// i = 1
// nums[1] = 1 => do nothing
// i = 2
// nums[2] = 2 => nums[1] = 2, x = 1
// nums = [1, 2, 2]
// x = 1 => return 2 and nums = [1, 2, 2] => first two elements are unique elements and rest are duplicates.


