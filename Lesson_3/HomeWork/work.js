//--створити масив з:
  //  - з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//- та вивести його в консоль

/*
let numbers = [22, 33, 44, 55, 66];
for (i=0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let string = ['one', 'two', 'three', 'four', 'five'];
for (i=0; i < string.length; i++) {
    console.log(string[i]);
}

let array = [77, 88, 99, 111, 222, 'six', 'seven', 'eight', 'nine', 'ten', !!NaN,  true, false, !!'ok', !!0];
for (i=0; i < array.length; i++) {
    console.log(array[i]);
}
 */

//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
/*
let array = [];
array[0] = 33;
array[1] = 'one';
array[2] = false;
array[3] = 1.22;
array[4] = !!NaN;
console.log(array)
 */
/*
let arr = [];
for (i = 0; i < 5; i++) {
    let filling = prompt('напишіть слово');
    arr.push(filling);
}
console.log (arr)
 */

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
/*
for (let i = 0; i < 10; i++) {
    document.write(`<div>Lorem ipsum.</div>`)
}
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let y = 0; y < 10; y++) {
    document.write(`<div>Lorem ipsum dolor. ${y}</div>`)
}
//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let n = 0;
while (n < 20) {
    document.write(`<h1>Lorem ipsum.</h1>`);
    n++;
}


//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let z = 0;
while (z < 20) {
    document.write(`<h1>(${z}) - Lorem ipsum dolor.</h1>`)
    z++;
}
 */

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
/*
let array = [];
for (i = 0; i < 10; i++) {
array.push( Math.round( Math.random() * 100 ));
    console.log(array[i]);
}
// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
for (u = 0; u < 10; u++) {
    console.log(array1[u]);
}
//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let array2 = [2, 53, 66, 'dh', 'row', 33.55, 1.2222, false, true, !!NaN]
    for (d = 0; d < array2.length; d++) {
        console.log(array2[d]);
    }
//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let array3 = [33, 44, 55, 'dd', 'udhfj', 'fifi', true, 33, false, 'gg']
for (c = 0; c < array3.length; c++) {
    if (typeof array3[c] === 'boolean') {
        console.log(array3[c])
    }
}

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let array4 = [88, 99, 45, 'dd', 'udhfj', 'fifi', true, 33, false, 'ddd']
for (f = 0; f < array4.length; f++) {
    if (typeof array4[f] === 'number') {
        console.log(array4[f]);
    }
}

//Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let array5 = [33, 44, 55, 'dd', 'udhfj', 'fifi', true, 33, false, 'ddd']
for (g = 0; g < array5.length; g++) {
    if (typeof array5[g] === 'string') {
        console.log(array5[g]);
    }
}

 */

//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr = [];
arr[0] = 555;
arr[1] = 777;
arr[2] = 22.333;
arr[3] = 0.00005;
arr[4] = 'solid';
arr[5] = 'width';
arr[6] = 'height';
arr[7] = 'like';
arr[8] = false;
arr[9] = true;
for (i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let u = 0; u < 10; u++){
    console.log(`step: ${u}`);
    document.write(`step: ${u}  <br>`);
}

//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let f =0; f < 100; f++) {
    console.log(`step: ${f}`);
    document.write(`step: ${f}  <br>`);
}

//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let v = 0; v < 100; v+= 2) {
    console.log(`step: ${v}`);
    document.write(`step: ${v} <br>`);
}

//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let n = 0; n < 100; n++) {
    if (n%2 === 0) {
        console.log(`step: ${n}`);
        document.write(`step: ${n} <br>`);
    }
}

//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let m = 0; m < 100; m++) {
    if (m%2 === 1) {
        console.log(`step: ${m}`);
        document.write(`step: ${m} <br>`);
    }
}