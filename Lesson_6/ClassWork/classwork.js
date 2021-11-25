// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let normalName = (notValName, action) => {
//     let newArray = [];
//     if (notValName.includes(action)) {
//         let arr = notValName.split(action);
//       arr.forEach((value) => (value) ? newArray.push(value) : "")
//           }
//     let newArrayJoin = newArray.join(" ");
//     console.log(newArrayJoin);
// }
// normalName(n1, '.');
// normalName(n2, '-');
// normalName(n3,"_")


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let randomArr = (length, num) => {
//     let newArray = [];
//     for (let i = 0; i < length; i++) {
//         newArray.push(Math.round(Math.random() * num));
//     }
//     return newArray;
// };
//
// console.log(randomArr(13,100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let randomArr = (length, num) => {
//     let newArray = [];
//     for (let i = 0; i < length; i++) {
//         newArray.push(Math.round(Math.random() * num));
//
//     }
//     return newArray.sort((num1, num2) => num1 - num2);
//
// };
// console.log(randomArr(13,100));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let randomArr = (length, num) => {
//     let newArray = [];
//     for (let i = 0; i < length; i++) {
//         newArray.push(Math.round(Math.random() * num));
//     }
//     console.log(newArray)
//     return newArray.filter((item) => item % 2 === 0)
//         .sort((num1, num2) => num1 - num2);
// };
// console.log(randomArr(13,100));


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let randomArr = (length, num) => {
//     let newArray = [];
//     for (let i = 0; i < length; i++) {
//         newArray.push(Math.round(Math.random() * num));
//     }
//     console.log(newArray)
//     return newArray.map((value) => value + '');
// };
// console.log(randomArr(13,100));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (arr,direction) => {
//     if (direction === 'ascending') {
//         return arr.sort((num1, num2) => num1 - num2);
//     }
//     else if (direction === 'descending') {
//         return arr.sort((num1, num2) => num2 - num1);
//     }
// }
// console.log(sortNums([11,21,3],'ascending'))
// console.log(sortNums([11,21,3],'descending'))

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sortMonthDuration = coursesAndDurationArray.sort((num1, num2) => num2.monthDuration - num1.monthDuration);
console.log(sortMonthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let sortMonthDuration2 = coursesAndDurationArray.filter((value => value.monthDuration > 5));
console.log(sortMonthDuration2);


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let arr = [];
let cutString = (str, n) => {
    for (i=0;i<str.length;i+=n) {
        arr.push(str.substr(i, n));
    }
    return arr;
};
console.log(cutString('наслаждение', 3));
