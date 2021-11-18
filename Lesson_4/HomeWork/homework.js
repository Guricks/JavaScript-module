// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calculateRectangleArea (a,b) {
//     let result = a * b;
//     return result;
// }
// document.write( `S rectangle =  ${calculateRectangleArea(3, 6)}`);
// console.log(calculateRectangleArea (10,5));

// створити функцію яка обчислює та повертає площу кола з радіусом r

// function calculateCircleArea(r) {
//     let areaCircle = 2 * Math.PI * r ;
//     return areaCircle;
// }
// document.write( `S circle =  ${calculateCircleArea(5)}`);


// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calculateСylinderArea (h,r) {
//     let sideSurfaceСylinderArea = 2 * Math.PI * h * r;
//     let basisСylinderArea = Math.PI * Math.pow(r,2);
//     let cylinderArea = sideSurfaceСylinderArea + basisСylinderArea;
//     document.write(`${sideSurfaceСylinderArea} - площа бічної поверхні циліндра <br>`);
//     document.write(`${basisСylinderArea} - площа основи циліндра <br>`);
//     return cylinderArea;
// }
// document.write(`S cylinder = ${calculateСylinderArea(6,11)}`)


// створити функцію яка приймає масив та виводить кожен його елемент

// let arrayNumber = [];
// for (i=0; i<10;i++) {
//     let filling = Math.round(Math.random() * 50);
//     arrayNumber.push(filling);
//     console.log(arrayNumber[i])
// }
// function arrayNumberWrite () {
//     document.write(`<ul>`);
//     for (i=0; i <arrayNumber.length; i++) {
//         document.write(`<li> ${arrayNumber[i]}</li>`)
//     }
//     document.write(`</ul>`);
// }
// arrayNumberWrite(arrayNumber)

// створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function textParagraph() {
//    for (let i = 0; i < arguments.length; i++) {
//         document.write(`<p>${arguments[i]}</p>`)
//   }
// }
// textParagraph('Hello World');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function liCreator (arguments) {
//     for (i=0; i<3; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${arguments}</li>`);
//         document.write(`</ul>`);
//     }
// }
// liCreator("Text to fill");

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function liCreator (arg, size) {
//     for (i=0; i < size; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${arg}</li>`);
//         document.write(`</ul>`);
//     }
// }
//
// liCreator("Text to fill", 3);

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrayElement = ['world',33, 0.09, true,'okten', false, 666, 'football',];
// function listArray (arrayElement){
//     document.write(`<ul>`)
//         for (let i = 0; i < arrayElement.length; i++) {
//             document.write(`<li>${arrayElement[i]}</li>`);
//         }
//     document.write(`</ul>`)
// }
// listArray(arrayElement);

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayObject = [
    {id: 111, name: 'Raul', age: 33},
    {id: 222, name: 'Stepan', age: 25},
    {id: 333, name: 'Solomia', age: 20},
    {id: 444, name: 'Jon', age: 29},
    {id: 555, name: 'Veniamin', age: 55}
];
function listArrayObject (arrayObject) {
   document.write(`<div>`);
    for (const arrayElement of arrayObject) {
        document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`);
    }
  document.write(`</div>`);
}
listArrayObject(arrayObject);

