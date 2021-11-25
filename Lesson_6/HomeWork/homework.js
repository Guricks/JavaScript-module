// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let stringMean1 = 'hello world';
// console.log(stringMean1.length);
//
// let stringMean2 = 'lorem ipsum';
// console.log(stringMean2.length);
//
// let stringMean3 = 'javascript is cool';
// console.log(stringMean3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

 // let stringMean1 = 'hello world';
// let stringMean1ToUpperCase = stringMean1.toUpperCase();
// console.log(stringMean1ToUpperCase);
//
// let stringMean2 = 'lorem ipsum';
// let stringMean2ToUpperCase = stringMean2.toUpperCase();
// console.log(stringMean2ToUpperCase);
//
// let stringMean3 = 'javascript is cool';
// let stringMean3ToUpperCase = stringMean3.toUpperCase();
// console.log(stringMean3ToUpperCase);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let stringMean1 = 'HELLO WORLD';
// let stringMean1ToLowerCase = stringMean1.toLowerCase();
// console.log(stringMean1ToLowerCase);
//
// let stringMean2 = 'LOREM IPSUM';
// let stringMean2ToLowerCase = stringMean2.toLowerCase();
// console.log(stringMean2ToLowerCase);
//
// let stringMean3 = 'JAVASCRIPT IS COOL';
// let stringMean3ToLowerCase = stringMean3.toLowerCase();
// console.log(stringMean3ToLowerCase);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let strTrim = str.trim();
// console.log(strTrim)
// console.log(str)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToArray = ((str) => str.split(' '));
// let str = 'Каждый охотник желает знать';
// let arr = stringToArray(str);
// console.log(arr)

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, length) => str.substr(0, length);
// let str = 'Каждый охотник желает знать';
// console.log(delete_characters (str,7))



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => str.split(' ').join('-').toUpperCase();
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let firstToApperCase = (str) => {
//     str.trim()
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(firstToApperCase('hello world'))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

 // let capitalize = (str) => str.split(' ').map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
// console.log(capitalize('кожне слово з великої літери'))

// let capitalize = (str) => {
//     let splitStr = str.split(' ');
//     for (let i = 0;i < splitStr.length;i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase()+ splitStr[i].substring(1);
//     }
//     return splitStr.join(' ');
// }
// console.log(capitalize('кожне слово з великої літери'))