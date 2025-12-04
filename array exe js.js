const student_names = [
    "Dana", "Yossi", "Noa", "Ali"
]

const student_ages = [
    12, 15, 17, 20, 25
]

const student_city_names = [
    "Tel Aviv", "Haifa", "Jerusalem"
]

const student_test_scores = [
    100, 95, 80, 60, 40
]

const student_book_titles = [
    "The Hobbit", "Dune", "1984", "It"
]

const is_light_on = [
    true, false, true
]

const product_prices = [
    10, 25, 7, 100, 50
]

const days_of_the_week = [
    "Monday", "Tuesday", "Wednesday", "Thursday"
]

const favorite_foods = [
    "pizza", "falafel", "ice cream"
]

const exam_results = [
    60, 70, 80, 90, 100, 55
]

let colors = [
    "red", "green", "blue", "yellow"
]
// console.log(colors)
// console.log(colors[0])
colors.splice(1, 1, 'purple')
// console.log(colors)


var numbers = [
    5, 10, 15
]

// console.log(numbers)
// console.log(numbers[2])
numbers.splice(2,1,20)
// console.log(numbers[2])
// console.log(numbers)

const movies = [
    "Avatar", "Titanic", "Inception", "Shrek"
]

// console.log(movies)
movies.splice(0,1,`Interstellar`)
// console.log(movies)

const ages = [
    10, 12, 14, 16, 18
]

// console.log(ages[2])
ages.splice(2,1,15)
// console.log(ages)

const strings = [
    `A`, `B`, `C`
]

// console.log|(strings)

// strings = [
//     "X", "Y", "Z"
// ]

//You cannot redeclare or modify a const variable.

let temperatures = [
    20, 22, 25, 30
]

// console.log(temperatures[0], temperatures[temperatures.length-1])

var bools = [
    true, false, false
]

bools[1] = true
// console.log(bools)

// console.log(student_names)
student_names[student_names.length-1] = `UpdatedName`
// console.log(student_names)


let product_names = [
    `a`, `b`, `c`
]
// console.log(product_names[1])
product_names[1] = `New Product`
// console.log(product_names[1])

const nums = [
    1,2,3,4
]

//error

const fruits = ["apple", "banana", "orange"]
fruits.push(`mango`)
console.log(fruits)