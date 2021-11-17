// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// let arrayNumbers = [];
// for (let i = 2, j = 0; i <= 100; i += 2, j++) {
//     arrayNumbers[j] = i;
//     console.log(arrayNumbers[j])
// }

// b. заповнити його 50 непарними числами за допомоги циклу.

// let arrayNumbers = [];
// for (let i = 1, j = 0; i <= 100; i += 2, j++) {
//     arrayNumbers[j] = i;
//     console.log(arrayNumbers[j])
// }

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arrayNum = [];
// for (let i = 0; i < 20; i++) {
//     arrayNum.push ( Math.round( Math.random() * 1000 ));
//     console.log(arrayNum[i])
// }

//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arrayNum = [];
// for (let i = 0; i < 20; i++) {
//     arrayNum.push(Math.floor(Math.random() * (732 - 8 +1))+8);
//     console.log(arrayNum[i])
// }

// 2. Вивести за допомогою console.log кожен третій елемен

// let arrayNum = [3,33,2,57,122,66,81,44,68,51,63,44];
// for (i = 2 ; i < arrayNum.length;i+=3) {
//     console.log(arrayNum[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let arrayNum = [3,33,2,57,122,66,81,44,68,51,63,53];
// for (let i = 2; i < arrayNum.length; i+=3) {
//    if (arrayNum[i]%2 ===0) {
//        console.log(arrayNum[i]);
//    }
// }

//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arrayNum = [3,33,2,57,122,66,81,44,68,51,63,53];
// let arrayNumSec = [];
// for (i=2; i<arrayNum.length; i+=3){
//     if (arrayNum[i]%2===0){
//        arrayNumSec.push(arrayNum[i]);
//         console.log(arrayNum[i])
//     }
// }

// 5. Вивести кожен елемент масиву, сусід справа якого є парним



