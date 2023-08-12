// console.dir(Promise)

// const promise = new Promise((resolve, reject) => {
//     const isFullfild = Math.random() > 0.5
//     console.log(isFullfild)

//     if (isFullfild) {
//         resolve("проміс виконався успішно!")
//     }
//     reject("проміс виконався з помилкою")
// })

// console.log(promise)

// promise.then(onSuccess, onError)

// function onSuccess(result) {
//     console.log(result)
// }

// function onError(error) {
//     console.log(error)
// // }

// // Напишіть функцію, яка отримує масив чисел і повертає проміс, який виконується, 
// // якщо всі числа в масиві є парними.
// // Якщо ж принаймні одне число непарне, проміс повинен бути відхилено з повідомленням "Є непарні числа".

// const arr = [2, 4, 6, 8, 10]

// function getArr(numbers){
//   const result = numbers.every((number) => {
//      return  number % 2 === 0
//    })

//    return new Promise((resolve, reject) => {
//       if (result) {
//         resolve("всі числа в масиві парні")
//       }
//       reject("є непарні числа")
//    })
// }

// getArr(arr).then((success) => {
//    console.log(success)
// }).catch((error) => {
//     console.log(error)
// }) 

// Напишіть функцію, 
// яка приймає два числа і повертає проміс, який виконується з результатом їхнього додавання. 
// Якщо хоча б одне з чисел не є числом, проміс повинен бути відхилено з повідомленням "Неправильні аргументи".

let firstNum = 3
let secondNum = 10

function addNumbers(first, second) {
    let numbersSum = first + second
    return new Promise((resolve, reject) => {
        if (numbersSum >= 10) {
        resolve(numbersSum)
        }
        reject("неправильні аргументи")
    })
    
}

addNumbers(firstNum, secondNum).then((success) => {
    console.log(success)
}).catch((error) => {
   console.log(error)
})