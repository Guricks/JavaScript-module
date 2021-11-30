// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let getElementByIdContent = document.getElementById('content');
console.log(getElementByIdContent);
// -- отримує текст з блоку з id "rules"

let getElementByIdRules = document.getElementById('rules');
console.log(getElementByIdRules);

let getElementsByClassNameRules = document.getElementsByClassName('fc');
console.log(getElementsByClassNameRules);

let rules = getElementsByClassNameRules[0];
console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший
let innerTextContent = getElementByIdContent.innerText = '«Бойцо́вский клуб» — американский кинофильм 1999 года режиссёра Дэвида Финчера по мотивам одноимённого романа Чака Паланика, вышедшего тремя годами ранее.';
console.log(innerTextContent);

// -- замініть текст параграфа з id 'rules' на будь-який інший

let innerTextRules = getElementByIdRules.innerText = 'В основу сюжета картины лег одноименный роман Чака Паланика. Главный герой фильма работает рядовым клерком в одной из крупных корпораций, и ведет очень скучный образ жизни. Единственным развлечением для него является покупка мебели по каталогам. Но однажды все кардинальным образом меняется, после того как герой знакомится с Тайлером Дерденом, человеком очень отличающимся от него, отрицающим устоявшиеся стереотипы.'
console.log(innerTextRules);

let innerTextClassRules = rules.innerText = 'В основу сюжета картины лег одноименный роман Чака Паланика. Главный герой фильма работает рядовым клерком в одной из крупных корпораций, и ведет очень скучный образ жизни. Единственным развлечением для него является покупка мебели по каталогам. Но однажды все кардинальным образом меняется, после того как герой знакомится с Тайлером Дерденом, человеком очень отличающимся от него, отрицающим устоявшиеся стереотипы.'
console.log(innerTextClassRules);

// -- змініть кожному елементу колір фону на червоний
getElementByIdContent.style.color = 'red';

getElementByIdRules.style.color = 'red';


// -- змініть кожному елементу колір тексту на синій
getElementByIdContent.style.color = 'blue';

getElementByIdRules.style.color = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let getElementByIdRulesClassList = document.getElementById('rules');
console.log(getElementByIdRulesClassList.classList);
let rulesClassList = getElementByIdRulesClassList.classList;
for (const classElement of rulesClassList) {
    console.log(classElement);
}


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let getElementsByClassName = document.getElementsByClassName('fc_rules');
console.log(getElementsByClassName);
for (const classNameElement of getElementsByClassName) {
    classNameElement.style.color = 'red';
    console.log(classNameElement);
}


