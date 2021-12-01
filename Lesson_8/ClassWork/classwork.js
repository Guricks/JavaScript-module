// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let main_headerGetElementById = document.getElementById('main_header');
main_headerGetElementById.classList.add('sep-2021');

// b) робить шириниу елементу ul 400px

let getElementByTagNameUl = document.getElementsByTagName('ul');
for (const elementByTagNameUlElement of getElementByTagNameUl) {
    console.log(elementByTagNameUlElement);
    elementByTagNameUlElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let getElementByClassName = document.getElementsByClassName('linkList');
for (const li of getElementByClassName) {
    console.log(li);
    li.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let elementsByClassName = document.getElementsByClassName('listElement2');
for (const item of elementsByClassName) {
    console.log(item.innerText)
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let elementsByTagNameLi = document.getElementsByTagName('li');
for (const elmLi of elementsByTagNameLi) {
    elmLi.style.background = 'grey';
    elmLi.style.border = '1px solid white'
    console.log(elmLi);
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let elementsByTagNameA = document.getElementsByTagName('a');
for (const elementsA of elementsByTagNameA) {
    elementsA.classList.add('anchor');
    console.log(elementsA);
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let elementsByTagNameA1 = document.getElementsByTagName('a');
for (const elementsA1 of elementsByTagNameA1) {
    if (elementsA1.innerText === 'link3'){
        elementsA1.style.fontSize = '40px';
        console.log(elementsA1);
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let elementsA = document.getElementsByTagName('a');
for (const elementA of elementsA) {
    elementA.classList.add(elementA.innerText);
    console.log(elementA)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let elementsSubHeader = document.getElementsByClassName('sub-header');
for (const element of elementsSubHeader) {
    // element.style.background = prompt("Напишіть потрібний колір");
    // console.log(element);

}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let elementsSubHeader1 = document.getElementsByClassName('sub-header');
for (const elementSubH of elementsSubHeader1) {
    if (elementSubH.innerText === 'content 2 segment') {
        // elementSubH.style.color = prompt("Напишіть потрібний колір");
        // console.log(elementSubH);
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let elementsContent1 = document.getElementsByClassName('content_1');
for (const elementCont of elementsContent1) {
    // elementCont.innerText = prompt('Напишіть текст');
}

// l) отримати елементи p та змінити їм padding на 20px

let elementsByTagNameP = document.getElementsByTagName('p');
for (const elementP of elementsByTagNameP) {
    elementP.style.padding = '20px';
    console.log(elementP);
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let elementsByClassNameText2 = document.getElementsByClassName('text2');
for (const elementText2 of elementsByClassNameText2) {
    elementText2.innerText ='sep-2021';
}

