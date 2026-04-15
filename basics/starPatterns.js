
// *
// **
// ***
// ****
// *****

let n = 5

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row = row + "*"
    }
    console.log(row)
}


// ______________________________


// 1
// 12
// 123
// 1234
// 12345
 
// let n = 5

for(let i = 1; i < n+1; i++ ){ 
  let row = ""
for(let j = 1; j < i+1; j++ ){
    row = row + j
}
console.log(row)
}
// -------------------
// 1
// 22
// 333
// 4444
// 55555


for(let i = 1; i < n+1; i++ ){ 
  let row = ""
for(let j = 1; j < i+1; j++ ){
    row = row + i
}
console.log(row)
}
