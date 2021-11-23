// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let rectangleS = (a, b) => a * b;
// document.write(`Площа прямокутника = ${rectangleS (3,6)}`); // = 18

// - створити функцію яка обчислює та повертає площу кола

// let circleS = (r) => Math.PI * Math.pow(r,2);

// document.write(`Площа кола = ${circleS(3)}`); // = 28.274333882308138


// - створити функцію яка обчислює та повертає площу циліндру

// let cylinderS = (a, r, h) => a * Math.PI * Math.pow(r, a) + a * Math.PI * r * h;
// document.write(`Площа циліндра = ${cylinderS(2, 3, 5)}`); // = 150.79644737231007


// - створити функцію яка приймає масив та виводить кожен його елемент

// let arrItem = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
//   arrItem.filter((arr) => {
//      console.log(arr);
//  })

//Variant 2

// let arrItem = (arr) => {
//       for (i=0; i<arr.length;i++) {
//            console.log(arr[i])
//       }
//   }
// arrItem(([1, 2, 3, 4, 5, 6, 7, 8, 9,]));


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let paragraphText = (arg) => `<p>${arg}</p>`;
//  document.write(paragraphText('Hello world'));

//Variant 2
// let paragraphText = (arg) => {
//     document.write(`<p>${arg}</p>`);
// }
// paragraphText('Hello world')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let elementLi = (arg) => {
//     for (i = 0; i < 3; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${arg}</li>`);
//         document.write(`</ul>`);
//     }
// };
// elementLi("Hello world");


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let liCreator = (arg, size) => {
//     document.write(`<ul>`);
//     for (i=0; i < size; i++) {
//         document.write(`<li>${arg}</li>`);
//     }
//     document.write(`</ul>`);
// }
// liCreator("Text to fill", 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrayElement = ['world',33, 0.09, true,'okten', false, 666, 'football'];
// let newArrayElement = (arr) => {
//     document.write(`<ul>`)
//         for (let i = 0; i < arrayElement.length; i++) {
//             document.write(`<li>${arrayElement[i]}</li>`);
//         }
//     document.write(`</ul>`)
// }
// newArrayElement(arrayElement);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let arrayObject = [
//     {id: 111, name: 'Raul', age: 33},
//     {id: 222, name: 'Stepan', age: 25},
//     {id: 333, name: 'Solomia', age: 20},
//     {id: 444, name: 'Jon', age: 29},
//     {id: 555, name: 'Veniamin', age: 55}
// ];
// ((arrayObject) => {
//     document.write(`<div>`);
//     for (const arrayElement of arrayObject) {
//         document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`);
//     }
//     document.write(`</div>`);
// })
// (arrayObject);