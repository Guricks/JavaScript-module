// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let form = document.createElement('form');
// form.setAttribute('name', 'userForm');
//
// let inputOne = document.createElement('input');
// inputOne.setAttribute('name', 'userName');
// inputOne.setAttribute('type', 'text');
//
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('name', 'age');
// inputTwo.setAttribute('type', 'number');
// inputOne.style.marginRight = '15px';
//
// let button = document.createElement('button');
// button.innerText = 'Save localstorage ';
// button.style.marginLeft = '10px';
//
//
// form.appendChild(inputOne);
// form.appendChild(inputTwo);
// form.appendChild(button);
// document.body.append(form);
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let name = this.userName.value;
//     let age = this.age.value;
//     localStorage.setItem('userInfo', JSON.stringify({name, age}));
// };



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі

// let form = document.createElement('form');
// form.setAttribute('name', 'carsForm');
//
// let inputOne = document.createElement('input');
// inputOne.setAttribute('name', 'model');
// inputOne.setAttribute('type', 'text');
// inputOne.style.marginRight = '15px';
//
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('name', 'type');
// inputTwo.setAttribute('type', 'text');
// inputTwo.style.marginRight = '15px';
//
// let inputThree = document.createElement('input');
// inputThree.setAttribute('name', 'volume');
// inputThree.setAttribute('type', 'number');
//
// let button = document.createElement('button');
// button.innerText = 'Save localstorage ';
// button.style.marginLeft = '10px';
//
//
// form.appendChild(inputOne);
// form.appendChild(inputTwo);
// form.appendChild(inputThree);
// form.appendChild(button);
// document.body.append(form);
//
// form.onsubmit = function (e){
//     e.preventDefault();
//     let model = this.model.value;
//     let type = this.type.value;
//     let volume = this.volume.value;
//     let car = {model, type, volume};
//
//     let cars = JSON.parse(localStorage.getItem('cars'));
//     if (!cars) {
//         cars = [];
//         cars.push(car);
//         localStorage.setItem('cars', JSON.stringify(cars));
//     }
//     else {
//         cars.push(car);
//         localStorage.setItem('cars',JSON.stringify(cars));
//     }
//
// };
