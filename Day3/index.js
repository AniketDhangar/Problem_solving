//star pattern

// 1.Print Right-Angled Star Triangle

// Input: Rows = 5

// Output:
// *
// **
// ***
// ****
// *****


// for (let i = 1; i <= nRows; i++) {
//     let rows = "";
//     for (let j = 1; j <= i; j++) {
//         rows = rows + "*"
//     }
//     console.log(rows)
// }



// Print Inverted Right-Angled Triangle
// Input: Rows = 5

// Output:

// *****
// ****
// ***
// **
// *
// ✨ Reinforces decreasing nested loop structure.


// for (let i = 5; i >= 0; i--) {
//     let str = ''
//     for (let j = i; j >= 1 ; j--) {
//         str = str + "*"
//     }
//     console.log(str)
// }


// Print Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    ***
//   *****
//  *******
// *********
// ✨ Teaches alignment using spaces and nested loops.
let nRows = 7
for (let i = 0; i <= nRows; i += 2) {
    let str = ''
    let space = ''

    console.log(i)
    for (let j = 0; j <= i; j++) {

        str = str + "*"
    }
    // console.log(str)
}



// Print Inverted Pyramid Pattern

// Input: Rows = 5

// Output:

// *********
//  *******
//   *****
//    ***
//     *
// ✨ Teaches reverse space-star pattern alignment.

// Print Hollow Square Pattern

// Input: Rows = 5

// Output:

// *****
// *   *
// *   *
// *   *
// *****
// ✨ Practices conditional printing within nested loops.

// Print Hollow Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    * *
//   *   *
//  *     *
// *********
// ✨ Combines conditionals and symmetrical logic in loops.

// Print Alternating Binary Triangle

// Input: Rows = 5

// Output:

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// ✨ Combines parity logic with nested loops.

