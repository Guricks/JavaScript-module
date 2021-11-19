// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function calculateArgumentsMaker() {
// if (arguments.length === 1) {
//     return arguments[0];
// } else if (arguments.length === 2) {
//       if (typeof arguments[0]=== "number" && typeof arguments[1] === "number") {
//         return arguments[0] + arguments[1];
//      } else if (typeof arguments[0]=== 'string' && typeof arguments[1]==='string') {
//         return (`${arguments[0]} ${arguments[1]}`);
//     } else {
//         return (`${arguments[0]} ${arguments[1]}`);
//     }
// } else {
//     return argumentsMaker;
// }
// }
// document.write(calculateArgumentsMaker(1)); // =1
// document.write(calculateArgumentsMaker(1,2)); // =3
// document.write(calculateArgumentsMaker('a')); // = a
// document.write(calculateArgumentsMaker('a','b')); // = a b
// document.write(calculateArgumentsMaker(1,'a')); // = 1 a

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function sumArrayNum (arr1,arr2) {
//     let newArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArray.push(arr1[i] + arr2[i]);
//     }
//     return newArray;
// }
// document.write( sumArrayNum([1,2,3,4],[2,3,4,5]));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function arrayObjectKey (obj) {
//     let arrKeys = [];
//     for (let object of obj) {
//         for (let key in object) {
//             arrKeys.push(key)
//         }
//     }
// return arrKeys;
// }
// document.write(arrayObjectKey([{name: 'Dima', age: 13}, {model: 'Camry'}]))

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function arrayObjectKeyValue (obj) {
    let arrKeysValue = [];
    for (let object of obj) {
    for (let key in object) {
        arrKeysValue.push(object[key])
    }
    }
return arrKeysValue;
}
document.write(arrayObjectKeyValue([{name: 'Dima', age: 13}, {model: 'Camry'}]))

