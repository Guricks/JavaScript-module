// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let arr = [];
// let cutString = (str, n) => {
//     for (i=0;i<str.length;i+=n) {
//         arr.push(str.substr(i, n));
//     }
//     return arr;
// };
// console.log(cutString('наслаждение', 3));



// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака
// равлика(@),наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let fnEmailVal = (email) => {
//     for (i = 0; i < email.length; i++) {
//         if (i < '@') {
//
//         }
//     }
// }
// fnEmailVal('someemail@gmail.com');

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let sortCoursesArray = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
// console.log(sortCoursesArray);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

 // let fnCount =(str, symb) =>{
 // let stringsearch = str.search(RegExp(symb,'g'));
 //     return stringsearch;
// }
// console.log(fnCount("Астрономия это наука о небесных объектах","о"));
//


// let fnCount = (str,symb) => {
//     let stringsearch = 0;
//     let strInOf = str.indexOf(symb);
//     while (strInOf >= 0) {
//         stringsearch++;
//         strInOf = str.indexOf(symb, strInOf + 1);
//     }
//     return stringsearch
// }
// console.log(fnCount("Астрономия это наука о небесных объектах","о"));



// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let fnCutString = (str, n) => {
//     let strSplitSpliseJoin = str.split(' ').splice(0,n).join(' ');
//     return strSplitSpliseJoin;
// };
// console.log (fnCutString("Сила тяжести приложена к центру масс тела",5))
