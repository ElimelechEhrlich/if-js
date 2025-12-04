// forof
// forEach
// map 
// filter 
// reduse

// const cars = [
//     {name:`bmw`,speed:100},
//     {name:`toyota`,speed:80},
//     {name:`honda`,speed:75},
//     {name:`lacsus`,speed:110},
//     {name:`kia`,speed:90},
//     {name:`shevrolet`,speed:95}
// ]

// const higher80 = cars.filter(car=>{return car.speed > 80})
// console.log(higher80)
// const tostring = higher80.map(car=>{return `${car.name}: ${car.speed}`})
// console.log(tostring)

const doubleValues = (arr => arr.map(num => num * 2))

const onlyEvenValues = (arr => arr.filter(num => num % 2 === 0))

const showFirstAndLast = (arr => arr.filter((num,i) => (i === 0 || i === arr.length-1) && typeof(num) === `string`))

const vowelCount = (str) => {
    const count = {
        A : 0,
        E : 0, 
        I : 0, 
        O : 0, 
        U : 0,   
        Y : 0   
    }
    const countkeys = Object.keys(count)
    for (let i = 0; i < str.length; i++) {
        countkeys.includes(str[i])? count[str[i]] += 1: count[str[i]] = 1
    }
    for (let j = 0; j < countkeys.length; j++) {
        if (count[countkeys[j]] > 0) console.log(`${countkeys[j]}: ${count[countkeys[j]]}`)
    };
}     
console.log(vowelCount('ELIMELECH'))



// const capitalize = str => str.toUpperCase()
// console.log(capitalize('elimelech'))

// const shiftLetters = str => 




// const nums = [`hi`, `bye`, `die`]
// for (let index = 0; index <= nums.length; index++) {
//     const element = nums[index];
//     console.log(element.toUpperCase())
// }

// function processData() {
//     const data = {id: 123456};
//     console.log(`ID:`, data.id);

//     const list = [1,2,3]
//     list.pop();

//     const user = {name: `Dana`, age: 30};
//     console.log(user.age);
// }

// processData();

// function counrletters(str) {
//     let total = 0

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ` `) {
//             total += str[i].length
//         }
//     }
//     return total
// }
// console.log(counrletters(`eli melech`))

// function sumages(str) {
//     const parts = str.split(" ")
//     let total = 0
//     for (let i = 0; i < parts.length; i++) {
//         total += parseInt(parts[i])
//     }
//     return total
// }
// console.log(sumages(`10 20  30 `))