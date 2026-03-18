//this covers loops 
console.time()
// 1.print 1 to N
let n = 4
// for (let i = 1; i <= n; i++) {
//     console.log(i)
// }

//2.print N to 1 , without changining abpve loop
// for (let i = 1; i < n; i++) {
//     console.log(n-i+1)
// }

// 3.print even numbers from 1 to N
// for (let i = 0; i < n; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// } 


// 4.sum of N numbers
//a.brute force //time -> O(n)
// let sum = 0
// for (let i = 1; i < n; i++) {
//     sum += i
// }
// console.log(sum)

//b.optimized solutions  // time ->O(1) 
// let sum1 = (n * (n + 1)) / 2
// console.log(sum1)

//5.factorial of n    // time ->O(n) 
// let product = 1
// for(let i = 1; i<=n;i++){
//     product *= i
// }
// console.log(product)

// 6.sum of all event numbers in N    
// let k = Math.floor(n / 2)  // time ->O(1) 
// let sum = k * (k + 1)
// for (let i = 0; i <= n; i++) {   ///  // time ->O(n) 
//     if (i % 2 === 0) {
//         sum += i
//     }
// }
// console.log(sum)

// 7.print all sqaure of 1 to n

let result = 0
for (let i = 1; i <= n; i++) {
    result = i * i
    console.log(result)
}


console.timeEnd()

