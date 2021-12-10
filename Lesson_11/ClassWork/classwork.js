// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етап
const users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let wrapperUsers = document.createElement('div');

for (const user of users) {
        let userRow = document.createElement('div');
        userRow.style.marginBottom = '15px';
       userRow.innerText = `${user.name}, ${user.age}, ${user.status}`;
        let button = document.createElement('button');
        button.innerText = 'Enter';
        button.style.marginLeft = '15px';

        button.onclick = function () {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || []
            favorites.push(user);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }

        userRow.appendChild(button);
        wrapperUsers.appendChild(userRow);

}
document.body.append(wrapperUsers);


let anchor = document.createElement('a');
anchor.href = 'favorite.html';
anchor.innerText = 'Enter this';
document.body.append(anchor);