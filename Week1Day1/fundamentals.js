//? ==== SCOOP ===

// var name = "bob";

// function SayHi() {
//     name = "alice"
//     console.log(name)
// }

// SayHi(); // ?
// console.log(name) // ?

//? ==== HOISTING ===

const x = "bob"
x = 5
console.log("What is x?", x)

const nums = [1, 2, 3, 4]

nums[0] = "bob"

console.log(nums)

// primitive datatypes
//!-String
//!-Number
//!- Boolean
//!- Null / undefined



// complex datatypes
//? Arrays
//? Objects

nums = "Wael"


const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
}

person = "Wael"
console.log(person)


//? ==== Destructuring ===
const persons = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
const animals = ['horse', , 'fish', 'cat', 'bird'];

const name = persons.firstName
// const lastName = persons.lastName

const { firstName, lastName, email } = persons

console.log(firstName, lastName, "this his email ", email)

// const firstAnimal = animals[0]
// const secondeAnimal = animals[2]

const [firstAnimal, , secondeAnimal, , lastAnimal] = animals
console.log(firstAnimal, secondeAnimal, lastAnimal)

//? ==== Rest/Spread ===
// pass by reference and pass by value
const a = [10, 20, 30, 40, 50]

// const b = a

// b.push(10000)
const b = [...a, 10000]



console.log(a) //?
console.log(b) //?