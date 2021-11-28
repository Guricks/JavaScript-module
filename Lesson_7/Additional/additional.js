// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'

function User(id, personName, userName, email, address, phone, website, company) {
    this.id = id;
    this.personName = personName;
    this.userName = userName;
    this.email = email;
    this.address = address;
    this.phoe = phone;
    this.website = website;
    this.company = company;
}

function Address(street, suite, city, zipcode, geo) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
}

function Geo(lat, lng) {
    this.lat = lat;
    this.lng = lng;
}

function Company(companyName, catchPhrase, bs) {
    this.companyName = companyName;
    this.catchPharase = catchPhrase;
    this.bs = bs;
}


let userInfo = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874',
        new Geo('-37.3159', '81.1496')), '1-770-736-8031 x56442', 'hildegard.org',
    new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));

console.log(userInfo);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function Tag(tagName, action, attributs) {
    this.tagName = tagName;
    this.action = action;
    this.attributs = attributs;
}

function Attribute(attName, attAction) {
    this.attName = attName;
    this.attAction = attAction;


}

let att = [new Attribute('href', 'Задает адрес документа, на который следует перейти.'),
    new Attribute('name','Устанавливает имя якоря внутри документа.')];
let att2 = [new Attribute('align', 'Задает выравнивание содержимого тега'),
    new Attribute('title', 'Добавляет всплывающую подсказку к содержимому.')];
let att3 = [new Attribute('align', 'Определяет выравнивание заголовка.'),
    new Attribute('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'),
    new Attribute('style', 'Применяется для определения стиля элемента с помощью правил CSS.')];
let att4 = [new Attribute('id', 'Указывает имя стилевого идентификатора.'),
    new Attribute('title', 'Описывает содержимое элемента в виде всплывающей подсказки.')];
let att5 = [new Attribute('list', 'Указывает на список вариантов, которые можно выбирать при вводе текста.'),
    new Attribute('size', 'Ширина текстового поля.'),
    new Attribute('type', 'Сообщает браузеру, к какому типу относится элемент формы.')];
let att6 = [new Attribute('novalidate', 'Отменяет встроенную проверку данных формы на корректность ввода.'),
    new Attribute('autocomplete', 'Включает автозаполнение полей формы.')];
let att7 = [new Attribute('disabled', 'Заблокировать для доступа элемент списка.'),
    new Attribute('value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.')];
let att8 = [new Attribute('multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.'),
    new Attribute('accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.')];



let tagA = new Tag('<a>', 'Предназначен для создания ссылок.', att);
let tagDiv = new Tag('<div>', 'Предназначен для выделения фрагмента документа с целью изменения вида содержимого', att2);
let tagH1 = new Tag('<h1>', 'Заголовок первого уровня', att3);
let tagSpan = new Tag('<span>', 'Предназначен для определения строчных элементов документа',att4);
let tagInput = new Tag('<input>', 'Предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.',att5);
let tagForm = new Tag('<form>', 'Предназначена для обмена данными между пользователем и сервером.', att6);
let tagOption = new Tag('<option>', 'Определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', att7);
let tagSelect = new Tag('<select>', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка',att8);


console.log({tagA, tagDiv, tagH1, tagSpan, tagInput, tagForm, tagOption, tagSelect});

