// Завдання 1
// Напиши функцію delay(ms), яка повертає проміс, 
// що переходить в стан "resolved" через мілісекунд. 
// Значенням промісу, яке виповнилося, 
// має бути та кількість мілісекунд, які передали під час виклику функції delay.
 
const delay = (ms) => {
   return new Promise((resolve) => {
    setTimeout(() => {
        resolve(ms)
    }, ms); 
   })
 
};
 
 
const logger = time => console.log(`Вирішено після ${time} ms`);
 
 
// Виклич функції для перевірки
 
delay(2000).then(logger); // Вирішено через 2000 мс
 
delay(1000).then(logger); // Вирішено через 1000 мс
 
delay(1500).then(logger); // Вирішено через 1500 мс
 
// // Завдання 2
// // Перепишіть таку функцію toggleUserState(), 
// щоб вона не використовувала callback-функцію callback, 
// а прийняла два всі параметри allUsersі userNameповернулася проміс.
 
const users = [
 
{ name: 'Mango', active: true },
 
{ name: 'Poly', active: false },
 
{ name: 'Ajax', active: true },
 
{ name: 'Lux', active: false },
 
];
 
 
function toggleUserState(allUsers, userName){
return new Promise((resolve) => {

    const updatedUsers = allUsers.map(user =>{
 
return user.name === userName ? { ...user, active: !user.active } : user
 
})

resolve(updatedUsers)

});

};
 
 
const loggerUsers = updatedUsers => console.table(updatedUsers);
 
toggleUserState(users, 'Mango').then(loggerUsers)
 
// toggleUserState(users, 'Lux').then(loggerUsers);
 

// Завдання 3
// Перепишіть функцію makeTransaction()так, 
// щоб вона не використовувала callback-функції onSuccessі onError, 
// а прийняла весь один параметр transactionі повернула проміс.
 
const randomIntegerFromInterval = (min, max) => {
 
return Math.floor(Math.random() * (max - min + 1) + min);
 
}
 
function makeTransaction(transaction, onSuccess, onError){
 
const delay = randomIntegerFromInterval(200, 500);

 return new Promise((resolve, reject) => {
    setTimeout(() => {

    const canProcess = Math.random() > 0.3;
         
    if (canProcess) {

    resolve({id: transaction.id, time: delay});

    } else {

    reject({id: transaction.id});

    }}, delay);
 })
}

const logSuccess = ({id, time}) => {
 
console.log(`Транзакція ${id} оброблена за ${time} ms`);
 
};
 
 
const logError = ({id}) => {
 
console.warn(`Помилка обробки транзакції ${id}. Спробуйте пізніше.`);
 
};
 
makeTransaction({ id: 70, time: 150 })
 
.then(logSuccess)
 
.catch(logError);