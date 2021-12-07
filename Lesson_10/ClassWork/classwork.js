// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'formOne');
// formOne.style.marginBottom = '20px';
// formOne.innerText = 'Enter info';
//
// let inputFormOne = document.createElement('input');
// inputFormOne.setAttribute('name', 'inputOne');
// inputFormOne.style.marginLeft = '15px';
//
// let inputFormOne2 = document.createElement('input');
// inputFormOne2.setAttribute('name', 'inputTwo');
// inputFormOne2.style.marginLeft = '15px';
//
// formOne.appendChild(inputFormOne);
// formOne.appendChild(inputFormOne2);
// document.body.append(formOne);
//
//
//
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'formTwo');
// formTwo.style.marginBottom = '20px';
// formTwo.innerText = 'Enter info';
//
// let inputFormTwo = document.createElement('input');
// inputFormTwo.setAttribute('name', 'inputThree');
// inputFormTwo.style.marginLeft = '15px';
//
// let inputFormTwo2 = document.createElement('input');
// inputFormTwo2.setAttribute('name', 'inputFour');
// inputFormTwo2.style.marginLeft = '15px';
//
//
// formTwo.appendChild(inputFormTwo);
// formTwo.appendChild(inputFormTwo2);
// document.body.append(formTwo);
//
//
// let buttonForm = document.createElement('button');
// buttonForm.innerText = 'Put button';
// buttonForm.style.width = '200px';
// buttonForm.style.height = '30px';
// buttonForm.style.background = 'blue'
//
// document.body.append(buttonForm);
//
//
// buttonForm.addEventListener('click', function (){
//     console.log(document.forms.formOne.inputOne.value);
//     console.log(document.forms.formOne.inputTwo.value);
//     console.log(document.forms.formTwo.inputThree.value);
//     console.log(document.forms.formTwo.inputFour.value);
// })




// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

    // let inputOne = document.createElement('input');
// inputOne.setAttribute('value', 'number of rows')
//     inputOne.style.width = '400px';
//     inputOne.style.height = '30px';
//     inputOne.style.marginBottom = '15px';
//
//     let inputTwo = document.createElement('input');
// inputTwo.setAttribute('value', 'number of cells');
//     inputTwo.style.width = '400px';
//     inputTwo.style.height = '30px';
//     inputTwo.style.marginBottom = '15px';
//
//     let inputThree = document.createElement('input');
// inputThree.setAttribute('value', 'cell contents');
//     inputThree.style.width = '400px';
//     inputThree.style.height = '30px';
//     inputThree.style.marginBottom = '15px';
//
//
//     let buttonWrapper = document.createElement('div');
//     let buttonInput = document.createElement('button');
//     buttonInput.style.width = '200px';
//     buttonInput.style.height = '30px';
//     buttonInput.style.borderRadius = '10px';
//     buttonInput.innerText = 'Generate table';
//
//     buttonWrapper.appendChild(buttonInput);
//     document.body.append(inputOne, inputTwo, inputThree, buttonWrapper);
//
//
// buttonInput.addEventListener('click', function () {
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let content = inputThree.value;
//
//     function tableCreate(cols,rows,cont) {
//         let table = document.createElement('table');
//          table.style.border = '2px solid black';
//
//                 for (let i = 0; i < rows; i++) {
//                     let tr = document.createElement('tr');
//                     tr.style.margin = '5px';
//                     for (let j = 0; j < cols; j++) {
//                         let td = document.createElement('td');
//                         td.innerText = `${cont}`
//
//                         tr.appendChild(td);
//                     }
//                     table.appendChild(tr);
//                 }
//
//         document.body.append(table);
//             }
//
//     tableCreate(tr, td, content);
// });



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let arrBadWords = ['shit', 'crap', 'damn', 'freak', 'douchebag', 'bastard',
//     'asshole', 'jerk', 'loser', 'nerd', 'noob', 'fool', 'stupid', 'dumb', 'retard'];
//
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Scan bad words';
//
// document.body.append(input, button);
//
// button.addEventListener('click', function () {
//     let valueInput = input.value;
//     for (const badWords of arrBadWords) {
//         if (badWords === valueInput) {
//             alert('This word is not acceptable!!!');
//             input.value = '';
//             return;
//         }
//
//         if (valueInput) {
//             alert('Welcome');
//             input.value = '';
//             return;
//         }
//     }
// });



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
    // Перевірку робити при натисканні на кнопку

// let arrBadWords = ['shit', 'crap', 'damn', 'freak', 'douchebag', 'bastard',
//   'asshole', 'jerk', 'loser', 'nerd', 'noob', 'fool', 'stupid', 'dumb', 'retard'];
//
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Scan bad words';
//
// document.body.append(input, button);
//
//  button.addEventListener('click', function () {
//     let valueInput = input.value;
//     for (const badWords of arrBadWords) {
//         let splitValue = valueInput.split(' ');
//         for (const string of splitValue) {
//             if (string === badWords ) {
//                 alert (badWords + ' '+'This word is not acceptable!!!')
//                 input.value = '';
//                 return;
//             }
//
//         }
//     }
// })