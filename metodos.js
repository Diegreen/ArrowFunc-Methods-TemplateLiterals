let users = ["Samuel", "Patrick", "Matheus", "Maria"]


const usersCurrent = users.map((element) => {
    return "Pedro"
})

console.log(usersCurrent)

//users = users.toString() && users.join(' / ')
//console.log(users)


let employeeBonus = [12, 14, 16, 23]

const currentEmployeeBonus = employeeBonus.map((element) => {
    return element * 2
})

console.log(currentEmployeeBonus)
console.log(employeeBonus)

let employeeBonus2 = [32, 34, 36, 33, 10, 9, 20, 35, 88, 55]

const valuesLaterThanThirdy = employeeBonus2.filter((element) => {
    return element > 32 
})

const valuesReduce = employeeBonus2.reduce((previousValue, currentValue) => {
    return previousValue + currentValue 
}, 10)
console.log(valuesReduce)
console.log(valuesLaterThanThirdy)

const even = (element) => element % 2 === 0
console.log(employeeBonus2.some(even))

const found = employeeBonus2.find((element) => element > 31)
console.log(found)