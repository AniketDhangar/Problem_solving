
let arr = [10, 5, 15,50,24,56,78]
let n = arr.length
console.time()

// 1.Find the Maximum of Three Numbers
let largest = arr[0]
let small = arr[0]
for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
        largest = arr[i]
    }
     if (arr[i] < small) {
        small = arr[i]
    }
    
}
console.log(largest)
console.log(small)



// 2.Check if a Number is Positive, Negative, or Zero
// let k = 0
// if (k > 0) {
//     console.log("Positive")
// }
// else if (k < 0) {
//     console.log("Negative")
// } else {
//     console.log("Zero")
// }


// 3.Calculate Electricity Bill
// Input: Units = 230

// Output: Total Bill = ₹1500

// ✨ Applies multiple ranges using chained else if and cumulative logic.

// Example Logic:

// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// 201–300 units → ₹10 per unit
// Above 300 units → ₹12 per unit
// 🔍 Teaches: cumulative calculation + condition chaining.

// function checkBills(unit) {

//     let result;
//     if (unit <= 100) {
//         result = unit * 5
//     } else if (unit >= 101 && unit <= 200) {
//         result = unit * 7
//     } else if (unit >= 201 && unit <= 300) {
//         result = unit * 10
//     } else if (unit > 300) {
//         result = unit * 12
//     }
//     return result
// }
// console.log(checkBills(230))




// 4.Check if a Character is a Vowel or Consonant

// Input: e
// Output: Vowel
// ✨ Combines logical OR (||) operator and string comparisons.

// ---------------------------------------------------------------
//Home work


// 2.Check Triangle Type Using Sides and Angles
// Input: Sides = 3, 4, 5

// Output: Right-Angled Triangle

// ✨ Combines geometric reasoning + Pythagoras theorem check.

// Example Logic:

// If a² + b² = c² → Right-angled
// Else if all sides equal → Equilateral
// Else if any two equal → Isosceles
// Else → Scalene


// function checkTriangle(a, b, c) {
//     if (a * a + b * b === c * c ||
//         b * b + c * c === a * a ||
//         a * a + c * c === b * b) {
//         console.log("Right-angled")
//     }
//     else if (a == b && b == c && c == a) {
//         console.log("Equilateral-angled")
//     }
//     else if (a == b || b == c || c == a) {
//         console.log("Isosceles-angled")
//     }
//     else {
//         console.log("Scalene-angled")

//     }

// }
// console.log(checkTriangle(3, 3, 3))

console.timeEnd()