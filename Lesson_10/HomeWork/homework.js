// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".


// let invisibleElement = document.getElementById('text');
// invisibleElement.style.width = '100px';
// invisibleElement.style.height = '100px';
// invisibleElement.style.background = 'silver';
//
// let button = document.getElementById('button');
// button.onclick = function () {
//     invisibleElement.style.display = 'none';
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let buttonInvis = document.getElementById('buttonInvis');
// buttonInvis.onclick = function () {
//     this.style.display = 'none'
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let buttonAge = document.getElementById('buttonAge');
// buttonAge.onclick = function () {
//     let age = document.getElementById('age').value;
//     if (age >18 && age <100) {
//         return document.write('Ваш вік біліше 18 років');
//     }
//     else if (age < 18 && age >0) {
//         return document.write('Вам не виповнилося 18 років');
//     }
//     else if (!age ) {
//         return document.write('Ви не ввели свій вік');
//     }
//     else {
//         return document.write ('Введене число не коректне')
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
// let wrapperMenu = document.getElementById('wrapperMenu');
// let buttonMenu = document.getElementById('buttonMenu');
//     buttonMenu.onclick = function () {
//             wrapperMenu.style.display = 'none';
//             buttonMenu.onclick = function () {
//                 wrapperMenu.style.display = 'block';
//
//         }
//     }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let arrSayHi = [
    {tittle: 'Привіт', body: 'Вітання українською'},
    {tittle: 'Ola', body: 'Вітання іспанською'},
    {tittle: 'Hello', body: 'Вітання англійською'},
    {tittle: 'Ahoj', body: 'Вітання чеською'},
    {tittle: 'Czesc', body: 'Вітання польською'},
    {tittle: 'Salut', body: 'Вітання французькою'},
    {tittle: 'Hallo', body: 'Вітання німецькою'},
    {tittle: 'Mrhbana', body: 'Вітання арабською'},
    {tittle: 'Ni hao', body: 'Вітання китайською'},
    {tittle: 'Konnichiwa', body: 'Вітання японською'},
];
let wrapperArr = document.createElement('ul');
let classCounter = 1;
for (const elementArr of arrSayHi) {
    let wrapperElement = document.createElement('li');
    wrapperElement.style.marginBottom = '5px';

    wrapperElement.innerText = `${elementArr.tittle} - ${elementArr.body}`;

    wrapperElement.setAttribute('class', 'class-' + classCounter);
    classCounter++;


    let buttonElement = document.createElement('button');
    buttonElement.innerText = 'Згорнути';
    buttonElement.style.marginLeft = '30px';
    buttonElement.style.marginBottom = '20px'

   buttonElement.onclick = function () {
       wrapperElement.style.display = 'none';
   }


    wrapperArr.appendChild(wrapperElement);
    wrapperArr.appendChild(buttonElement)
}

document.body.append(wrapperArr);
