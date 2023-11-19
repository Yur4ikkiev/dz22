let check;
let mas;
let item;
let array = [];
let r;

do {
    mas = +prompt('Введите длинну массива(цифра от 5 и выше)'); 
    if (isNaN(mas) && mas !== 'number' || mas <= 4) {
        alert `Вы не ввели число или ввели число значение которого меньше 5`;
        check = true;
    } else {
        check = false;
    }
} while (check);

for (let i = 0; i < mas; i++) {
    item = prompt('вводите значение которое должно быть в массиве'); 
    array.push(item);
}
document.write(`заполнили массив данными - ${array} <br>`);

array.sort(function(a, b) {
    return a - b;
});
document.write(`отсортировали по возрастанию - ${array} <br>`);

r = array.splice(1,3); 

document.write(`удалили с 2 по 4 элементы(1-3 индекс) в массиве и остались только эти ${array}<br>`);

array.sort(function(a, b) {
    return a - b;
});
document.write(`отсортировали учётом удаления(надо если в массиве были текстовые элементы и числа) - ${array} <br>`);








 






// const innerLength = parseInt(prompt('Довжину внутрішніх масивів'));
// const value = prompt('Значення всіх елементів всіх масивів');

// function fillArr(mainLength, innerLength, value) {
//     const arr = [];
//     if (isNaN(mainLength) || isNaN(innerLength)) {
//         return "You are entered a wrong number";
//     } else {
//         for (let i = 0; i < mainLength; i++){
//             const innerArr = [];
//             for(let j = 0; j < innerLength; j++){
//                 arr.push(value);
//             }
//             break;
//         }
//         return arr;
//     }
// }

// const myArr = fillArr(mainLength, innerLength, value);
// console.log(myArr);



