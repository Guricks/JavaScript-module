// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,username,surname,email,phone) {
    this.id = id;
    this.username = username;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userArr = [
    new User(11, 'Dima', 'Rondo', 'rondo@gmail.com', '+380939393933'),
    new User(32,'Serhii','Dymnich','dymnich@gmail.com','+380973456241'),
    new User(31,'Petro','Shtativ','shtativ@gmail.com','+380934355768'),
    new User(47,'Genadii','Voitseh','votseh@gmail.com','+380996578327'),
    new User(15,'Solomia','Serp','serp@gmail.com','+380956647352'),
    new User(26,'Anna', 'Demidova','demidova@gmail.com','+380994357899'),
    new User(73,'Galina','Blanca','blanca@ukr.net','+380937455566'),
    new User(18,'Chuppa','Chups','chups@ukr.net','+380944557732'),
    new User(29,'Don','Mafia','mafia@ukr.net','+380994678833'),
    new User(10,'Life','History','history@ukr.net','+380634567333')
];
console.log(userArr)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let userArrFilter = userArr.filter(value => value.id % 2 === 0);
console.log(userArrFilter)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let userArrSort = userArr.sort((a, b) => a.id - b.id);
console.log(userArrSort);
let userArrSort2 = userArrFilter.sort((a, b) => a.id - b.id);
console.log(userArrSort2)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id,username,surname,email,phone,order) {
        this.id = id;
        this.username = username;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let userArrClient = [
    new Client(11, 'Dima', 'Rondo', 'rondo@gmail.com', '+380939393933',['html','css']),
    new Client(32,'Serhii','Dymnich','dymnich@gmail.com','+380973456241',['html']),
    new Client(31,'Petro','Shtativ','shtativ@gmail.com','+380934355768',['html','css','java','js']),
    new Client(47,'Genadii','Voitseh','votseh@gmail.com','+380996578327',['html','css']),
    new Client(15,'Solomia','Serp','serp@gmail.com','+380956647352',['css','react','nod','js']),
    new Client(26,'Anna', 'Demidova','demidova@gmail.com','+380994357899',['html','css','js']),
    new Client(73,'Galina','Blanca','blanca@ukr.net','+380937455566',['html','css','java','js','nod','react']),
    new Client(18,'Chuppa','Chups','chups@ukr.net','+380944557732',['html','css']),
    new Client(29,'Don','Mafia','mafia@ukr.net','+380994678833',['css','react','nod','js']),
    new Client(10,'Life','History','history@ukr.net','+380634567333',['html','css','js'])
];


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let userArrClientSort = userArrClient.sort((a, b) => a.order.length - b.order.length);
console.log(userArrClientSort);