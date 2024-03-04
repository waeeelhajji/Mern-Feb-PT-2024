
//?--------Callback Functions

const CallbackFun = () => {
    console.log("start")
}


setTimeout(CallbackFun, 5000);

console.log("end");


//?--------The Big Freeze

const freeze = [1, 2, 3, 4, 5]

freeze.push(300)
console.log(freeze)


const freezFun = Object.freeze([1, 2, 3, 4, 5])

// freezFun.push(300)

//?--------Spread, Concat, and Slice


const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

const needThyme = [...groceryList, { "item": "thyme", "haveIngredient": false }];

// console.log(needThyme)


const arr1 = [1, 2, 3]
const arr2 = ["Nabil", "Abir", "Sarra"]

const twoArrays = arr2.concat(arr1)

console.log(twoArrays)


const arr = [5, 8, 1, 0]

const sortedArray = arr.sort()

console.log(sortedArray)


//!-------------------------------Map and Filter

//?-----------------.map()

const animals = ["leopard ", "giraffe", "zebra", "elephant", "monkey", "lion"]

// const newArr = []
// for (let index = 0; index < animals.length; index++) {
//     animals[index] = animals[index] + " is Awesome"
//     newArr.push(animals[index])

// }

// console.log(newArr)

const newArrayWitheMap = animals.map((oneElm, idx) => {
    return oneElm + " is Awesome"
})

const newArrayWitheMapIndex = animals.map((oneElm, idx) => {
    return ` ${idx} - ${oneElm} is Awesome`
})

const newArrayWitheMapLength = animals.map((oneElm, idx) => {
    return oneElm.length * 2
})
// console.log(newArrayWitheMapLength)


//?-------.filter()

const filterdArray = animals.filter((oneAnimal) => {

    return oneAnimal.length > 5
})

console.log(filterdArray)
