var reverseString = function (s) {

    let len = s.length
    let halfLen = Math.floor(len / 2)

    for (let i = 0; i < halfLen; i++) {
        let temp = s[i]
        s[i] = s[len - 1 - i]
        s[len - 1 - i] = temp
    }


};


//logic
// swap first and last element and then move towards middle and
//  repeat the process until we reach middle of the string.

//time complexity is O(n/2) => O(n) and space complexity is O(1) as we are not using any extra space.

//deep dive into the code with proper line by line explanation and dry run of the code with example input and output.

// let s = ["h", "e", "l", "l", "o"]
// len = 5
// halfLen = 2
// i = 0
// temp = s[0] = "h"
// s[0] = s[4] = "o"
// s[4] = temp = "h"
// s = ["o", "e", "l", "l", "h"]    
// i = 1
// temp = s[1] = "e"
// s[1] = s[3] = "l"
// s[3] = temp = "e"
// s = ["o", "l", "l", "e", "h"]

