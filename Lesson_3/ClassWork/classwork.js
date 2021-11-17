// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]
// 1. перебрати його циклом while
let arrNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;
while (i < arrNumbers.length) {
    document.write(`${arrNumbers[i]} <br>`);
    i++;
}




// 2. перебрати його циклом for

// for (a = 0; a < arrNumbers.length; a++) {
//     document.write(`${arrNumbers[a]} <br>`)
// }


// for (let b = 0; b < arrNumbers.length; b++) {
//     const arrElement = arrNumbers[b];
//     document.write(`${arrElement} <br>`)
// }




// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let c = 0;
// while (c < arrNumbers.length) {
//     if (c%2 === 1 ) {
//         console.log(arrNumbers[c])
//     }
//     c++;
// }





//4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let d = 0; d < arrNumbers.length; d++) {
//     const arrNumbersitem = arrNumbers[d];
//     if (d % 2 === 1){
//         document.write(`${arrNumbersitem} <br>`)
//     }
// }




// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let e = 0;
// while (e < arrNumbers.length) {
//     if (arrNumbers[e] % 2 === 0) {
//         console.log(arrNumbers[e]);
//     }
//     e++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (const item of arrNumbers) {
// if (item % 2 === 0) {
//    console.log(item);
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"

// for (let f = 0; f < arrNumbers.length; f++) {
//     if (arrNumbers[f] % 3 === 0) {
//         arrNumbers[f] = 'okten'
//     }
//     console.log(arrNumbers[f])
// }


// 8. вивести масив в зворотньому порядку.

// for (let g = arrNumbers.length - 1; g >= 0; g--) {
//     const arrNumber = arrNumbers[g];
//     console.log(arrNumber);
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

 // let h = arrNumbers.length - 1;
 // while (h >= 0) {
 //    document.write(`${arrNumbers[h]} <br>`);
 //    h--;
// }


// for (j = arrNumbers.length -1; j >= 0; j--) {
//     document.write(`${arrNumbers[j]} <br>`)
// }


// let k = arrNumbers.length - 1;
// while (k >= 0) {
//     if (k%2 === 1 ) {
//         console.log(arrNumbers[k])
//     }
//     k--;
// }

// for (let l = arrNumbers.length -1; l >= 0; l--) {
//     const arrNumbersitem = arrNumbers[l];
//     if (l % 2 === 1){
//         document.write(`${arrNumbersitem} <br>`)
//     }
// }


// let m = arrNumbers.length - 1;
// while (m >=0) {
//     if (arrNumbers[m] % 2 === 0) {
//         console.log(arrNumbers[m]);
//     }
//     m--;
// }


// for (let n = arrNumbers.length -1; n>=0; n--) {
// if (arrNumbers[n] % 2 === 0) {
//    console.log(arrNumbers[n]);
//     }
// }


// for (let o = arrNumbers.length -1; o >=0; o--) {
//     if (arrNumbers[o] % 3 === 0) {
//         arrNumbers[o] = 'okten'
//     }
//     console.log(arrNumbers[o])
// }