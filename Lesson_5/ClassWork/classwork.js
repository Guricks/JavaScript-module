// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let nums = (a, b, c) => {
//     if (a < b && a < c) {
//        return a;
//     } else if (b < a && b < c) {
//         return b;
//     } else {
//        return c;
//     }
// }
// console.log (nums (3, 4, 5));// = 3
// console.log (nums(5, 8, 1)); // = 1


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// ((a, b, c) => {
//     if (a < b && a < c) {
//         console.log (a);
//     } else if (b < a && b < c) {
//         console.log (b);
//     } else {
//         console.log (c);
//     }
// })
// (3, 4, 5);// = 3
// (5, 8, 1); // = 1


// - створити функцію яка повертає найбільше число з масиву

// let arrMaxNum = (arr) => {
//     let max = arr[0];
//     for (const i of arr) {
//         if (i > max) {
//             max = i;
//         }
//     }
//     return max;
// };
// document.write(arrMaxNum([2, 5, 3, 6, 11, 12, 1])); //= 12


// - створити функцію яка повертає найменьше число з масиву

// let arrMinNum = (array) => {
//     let min = array[0];
//     for (const index of array) {
//         if (index < min) {
//             min = index;
//         }
//     }
//     console.log(min) // = 1
//     return min;
// };
// arrMinNum([2, 5, 3, 6, 11, 12, 1]);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arrayNum = [5, 55, 1, 3,11];
// ((sumArrayNum) => {
//     let num = 0;
//     for (const element of arrayNum) {
//         num = element + num;
//     }
//     console.log(num) // = 75
//     return num;
// })
// (arrayNum);



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arrayNum = [5, 55, 1, 3,11];
// ((averageArrNum) => {
//     let num = 0;
//     for (const element of arrayNum) {
//         num = element + num;
//     }
//      averageNum = num / arrayNum.length;
//     return averageNum;
// })
// (arrayNum);
// console.log(averageNum)


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let numberMaxMin =(...nums) => {
//     let max = nums[0];
//     let min = nums[0];
//     for (const num of nums) {
//         if (num > max) {
//             max = num;
//         }
//        if (num < min) {
//             min = num;
//         }
//     }
//     document.write(max)
//     return min;
// };
// console.log(numberMaxMin(55, 4,66,84,1, 555,24));


// - створити функцію яка заповнює масив рандомними числами

// let randomArrayNum = (num)=> {
//     let arrayNum = [];
//     for (let i = 0; i < num; i++){
//         arrayNum.push(Math.round(Math.random() * 100));
//     }
// return arrayNum
// };
//
// document.write(randomArrayNum(10))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// ((length,limit) => {
//     let arrayNum = [];
//     for (let i = 0; i < length; i++) {
//         arrayNum.push(Math.round(Math.random() * limit));
//     }
//     document.write(arrayNum)
//     return arrayNum;
// })
// (13,111);



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// ((array) => {
//     let arrayNew = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         const arrayElement = array[i];
//         arrayNew.push(arrayElement);
//     }
//     document.write(arrayNew);
// })
// ([3, 46, 77, 54, 2, 14, 55, 9]);