// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let elementDiv = document.createElement('div');
elementDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
elementDiv.innerText = 'Lorem ipsum dolor sit amet.'
elementDiv.style.background = 'green';
elementDiv.style.color = 'orange';
elementDiv.style.fontSize = '26px';
elementDiv.style.margin = '10px'
elementDiv.style.border = '3px solid black';

document.body.append(elementDiv);

document.body.appendChild(elementDiv.cloneNode(true));
document.body.appendChild(elementDiv.cloneNode(true))
document.body.appendChild(elementDiv.cloneNode(true))
document.body.appendChild(elementDiv.cloneNode(true))

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let containerClassMenu = document.getElementsByClassName('menu');
// containerClassMenu = containerClassMenu[0];
// console.log(containerClassMenu);
//
// let arrContainer = ['Main', 'Products', 'About us', 'Contacts'];
// for (const itemArr of arrContainer) {
//     let elementLi = document.createElement('li');
//     elementLi.innerText = `${itemArr}`;
//     console.log(elementLi)
//
//     containerClassMenu.appendChild(elementLi);
// }



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesElement of coursesAndDurationArray) {
//     let elementDiv = document.createElement('div');
//     elementDiv.style.border = '2px solid red';
//     elementDiv.style.marginBottom = "5px";
//     elementDiv.style.width = '300px';
//     elementDiv.innerText = `${coursesElement.title} - ${coursesElement.monthDuration}`;
//     document.body.append(elementDiv);
//     console.log(elementDiv)
// }



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];



// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesElement of coursesAndDurationArray) {
//     let elementDiv = document.createElement('div');
//     elementDiv.classList.add('item');
//     elementDiv.style.border = '5px solid black'
//     elementDiv.style.margin = '5px';
//     elementDiv.style.textAlign= 'center';
//
//
//     let elementH1 = document.createElement('h1');
//     elementH1.classList.add('heading');
//     elementH1.innerText = `${coursesElement.title}`;
//     elementH1.style.borderBottom = '2px solid black';
//
//     let elementP = document.createElement('p');
//     elementP.classList.add('description');
//     elementP.innerText = `${coursesElement.monthDuration}`;
//
//
//     elementDiv.appendChild(elementH1);
//     elementDiv.appendChild(elementP);
//     document.body.append(elementDiv);
//
//     console.log(elementDiv)
// }