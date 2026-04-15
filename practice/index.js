// const users = [
//     { id: 1, name: "Chetan", age: 23, salary: 30000, active: true },
//     { id: 2, name: "Rahul", age: 28, salary: 50000, active: false },
//     { id: 3, name: "Ankit", age: 26, salary: 45000, active: true },
//     { id: 4, name: "Priya", age: 22, salary: 25000, active: true },
// ];



const users = [
    {
        id: 1,
        name: "Chetan",
        age: 24,
        city: "Mumbai",
        skills: ["JavaScript", "React", "Node"],
        salary: 50000,
        isActive: true,
    },
    {
        id: 2,
        name: "Amit",
        age: 28,
        city: "Pune",
        skills: ["Java", "Spring"],
        salary: 70000,
        isActive: false,
    },
    {
        id: 3,
        name: "Rahul",
        age: 22,
        city: "Mumbai",
        skills: ["JavaScript", "Node"],
        salary: 45000,
        isActive: true,
    },
    {
        id: 4,
        name: "Neha",
        age: 26,
        city: "Delhi",
        skills: ["Python", "Django"],
        salary: 80000,
        isActive: true,
    },
    {
        id: 5,
        name: "Sneha",
        age: 30,
        city: "Mumbai",
        skills: ["JavaScript", "React"],
        salary: 90000,
        isActive: false,
    },
];

//get all active users
// const actived = users.filter((active) => active.isActive == true)
// console.log(actived)

// get all names
//  users.forEach((user) => console.log(user.name))
//  const names = users.map((user)=>user.name)
//  console.log(names)

//get users from Mumbai
// const cities  =  users.filter(user=>user.city === "Mumbai")
// console.log(cities)

//  get users with salary > 60000
// const  moreSalary  = users.filter(user=> user.salary > 60000)
// console.log(moreSalary)

//get all skills of all users
// const skills = users.flatMap((user)=>user.skills)
// console.log(skills)

//get names from Mumbai
// const mumbaiNames = users
//     .filter((user) => user.city == "Mumbai")
//     .map((users) => users.name)
// console.log(mumbaiNames)

//calculate salary of all users
// const totalSalary = users
//     .map((user) => user.salary)
//     .reduce((acc, curr) => acc + curr, 0)
// console.log(totalSalary)

//find higest paid
console.time()
const highest = users.reduce((high, curr) => curr.salary > high.salary ? curr : high)
console.log(highest)
// let high = users[0]
// for (let i = 0; i <= users.length - 1; i++) {
//     if (users[i].salary > high.salary) {
//         high = users[i]
//     }
// }
// console.log(high)
console.timeEnd()