// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// debugger
// function minNumber (num1,num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         document.write(num1);
//     } else if (num2 < num1 && num2 < num3){
//         document.write(num2);
//     } else {
//         document.write(num3);
//     }
// }
// minNumber(33, 77, 55); //33(num1)

// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber (num1,num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1);
//     } else if (num2 > num1 && num2 > num3){
//         document.write(num2);
//     } else {
//         document.write(num3);
//     }
// }
// maxNumber(100, 102, 112); //112(num3)

// - створити функцію яка повертає найбільше число з масиву

// let arrayNum = [];
// for (i = 0; i < 10; i++) {
//     let filling = Math.round(Math.random() * 88);
//     arrayNum.push(filling);
//     console.log(arrayNum[i]);
// }
// function maxNumArray (arrayNum) {
//     let max = arrayNum[0];
//     for (const number of arrayNum) {
//         if (number > max) {
//             max = number;
//             document.write(number);
//         }
//     }
//     return arrayNum;
// }
// maxNumArray(arrayNum);

// - створити функцію яка повертає найменьше число з масиву

// let arrayNum = [];
// for (i = 0; i < 10; i++) {
//     let filling = Math.floor(Math.random() * (999 - 3 +1)) +3;
//     arrayNum.push(filling);
//     console.log(arrayNum[i]);
// }
// function minNumArray (arrayNum) {
//     let min = arrayNum[0];
//     for (const number of arrayNum) {
//         if (number < min) {
//             min = number;
//             document.write(min);
//         }
//     }
//     return arrayNum;
// }
// minNumArray(arrayNum);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arrayNum = [44, 3, 13, 22];
// function sumArrayNum (arr) {
//     let result = 0;
//     for (const arrElement of arrayNum) {
//          result = arrElement +result;
//     }
//     return result;
// }
// document.write(sumArrayNum(arrayNum));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arrayNum = [44, 3, 13, 22]; // = 20.5
// function arithmeticMean (arr){
//     let result = 0;
//     for (const arrElement of arrayNum) {
//       result += arrElement;
//     }
//     return result/arrayNum.length;
// }
// document.write(arithmeticMean(arrayNum))



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function numberMaxMin(num) {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const argument of arguments) {
//         if (argument > max) {
//             max = argument;
//         }
//          if (argument < min) {
//             min = argument;
//         }
//     }
//     document.write(max)
//     return min;
// }
//
// console.log(numberMaxMin(33, 444, 777, 256, 19, 1000,));



// - створити функцію яка заповнює масив рандомними числами


// function randomArrayNum (num) {
//     let arrayNum = [];
//     for (let i = 0; i < num; i++){
//         arrayNum.push(Math.round(Math.random() * 777));
//     }
// return arrayNum
// };
//
// document.write(randomArrayNum(10))



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomArrayNum(length,limit) {
//     let arrayNum = [];
//     for (let i = 0; i < length; i++) {
//         arrayNum.push(Math.round(Math.random() * limit));
//     }
//     return arrayNum;
// }
// document.write(randomArrayNum(13,777));



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


function reverseArray(array) {
    let arrayNew = [];
    for (let i = array.length - 1; i >= 0; i--) {
        const arrayElement = array[i];
        arrayNew.push(arrayElement);
    }
    document.write(arrayNew);
}
reverseArray (arrayNum = [3, 46, 77, 54, 2, 14, 55, 9]);

