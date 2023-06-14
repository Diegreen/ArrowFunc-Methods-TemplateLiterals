//map
let users = ["Samuel", "Patrick", "Matheus", "Maria"]


const usersCurrent = users.map((element) => {
    return "Pedro"
})

console.log(usersCurrent)

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubleNumbers);
//users = users.toString() && users.join(' / ')
//console.log(users)

let employeeBonus = [12, 14, 16, 23]

const currentEmployeeBonus = employeeBonus.map((element) => {
    return element * 2
})

console.log(currentEmployeeBonus)
console.log(employeeBonus)
//filter
let employeeBonus2 = [32, 34, 36, 33, 10, 9, 20, 35, 88, 55]

const valuesLaterThanThirdy = employeeBonus2.filter((element) => {
    return element > 32 
})
//reduce
const valuesReduce = employeeBonus2.reduce((previousValue, currentValue) => {
    return previousValue + currentValue 
}, 10)
console.log(valuesReduce)
console.log(valuesLaterThanThirdy)
//some
const even = (element) => element % 2 === 0
console.log(employeeBonus2.some(even))

//find
const found = employeeBonus2.find((element) => element > 31)
console.log(found)

const numbers2 = [1, 2, 3, 4, 5];
const foundNumber = numbers2.find(number => number === 3);
console.log(foundNumber);

const persons = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 35 }
  ];
  const foundPerson = persons.find(person => person.age === 40);
  console.log(foundPerson);
//foundIndex
  const persons2 = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 },
    { name: 'Alice', age: 35 }
  ];
  const foundIndex = persons2.findIndex(persons2 => persons2.age === 40);
  console.log(foundIndex);
