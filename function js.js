const sayHello = function() {
    console.log(`Hello from the function`)
}

sayHello()

const printOneToThree = function() {
    for (i = 1; i <= 3; i++) {
        console.log(i)
    }
}

printOneToThree()

const printLength = function() {
    const names = [
        `eli`, `beni`, `avi`, `moshe`
    ]
    console.log(names.length)
}

printLength()

const printStudent = function() {
    const obj = {
        name : `Dana`,
        age : 16
    }
    const {name, age} = obj
    console.log(name, age)
}

printStudent()

const printEvensToTen = function() {
        for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

printEvensToTen()

const sumTwoNumbers = function() {
    const a = 5
    const b = 7
    return a + b
}
const result = sumTwoNumbers()
console.log(`The sum is: ${result}`)

const getNamesLength = function() {
    const names =  ["Dana", "Noa", "Yossi", "Ali"]
    return names.length
}

const len = getNamesLength()
console.log(len)

const getGrade = function() {
    const grade = 72
    return grade
}
console.log(getGrade())

const studentGrade = getGrade()

studentGrade < 60? console.log("Failed"): console.log("Passed")


const getProduct = function() {
    const x = 2
    const y = 3
    const z = 4
    return x * y * z
}

const prod = getProduct()
console.log(`Product is: ${prod}`)

const calculateFinalPrice = function() {
    const price = 200
    const discount = 20
    return price - discount
}

const finalPrice = calculateFinalPrice()
console.log(`Final price: ${finalPrice}`)

const printScore = (score) => console.log(`Score is: ${score}`)
let score = 80
printScore(score)

// the value is - 80, it come from outer variable which is used as a parameter for the function that prints it

let grade = 50

const increaseGrade = (grade) => console.log(grade+10)
increaseGrade(grade)
console.log(grade)

// the outer grade stay 50 inside printed 60

let counter = 0

const incrementCounter = () => {
    counter ++
    console.log(counter)
}

for (i = 1; i <= 3; i++) {incrementCounter()}
console.log(counter)

// 1, 2, 3, 3