// - Дано натуральное число n. Выведите все числа от 1 до n.

// let numberOutput = (n) => n ? numberOutput(n - 1) + n : "";
//  document.write(numberOutput(11));


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let numbersAB = (a,b) => {
//     for (let i = a; i <= b; i++) {
//         console.log (i)
//     }
//     for(let j = b; j>a-1; j--){
//         console.log(j)
//     }
//     return numbersAB
// }
// numbersAB(5,9)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let fnArrayAndNum = (arr,num) => {
//     for (i = 0; i < arr.length; i++) {
//         if (i === num) {
//             let j = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i + 1] = j;
//         }
//     }
//     console.log(arr)
//     return fnArrayAndNum
// }
//
// fnArrayAndNum([9, 8, 0, 4], 0);
// fnArrayAndNum([9, 8, 0, 4], 1);
// fnArrayAndNum([9, 8, 0, 4], 2);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

