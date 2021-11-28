// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, yearOfIssue, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfIssue = yearOfIssue;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        return `їдемо зі швидкістю ${maxSpeed} на годину`;
    };
    this.info = function () {
        for (const item in this) {
            if (typeof this[item] !== 'function') {

                console.log(`${item} - ${this[item]}`)
            }
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        return this.yearOfIssue = newValue;
    };
    this.addDriver = function (driver) {
      return this.driver = driver;

    }

}

let car = new Car('BMW 8','Germany', 2019,250, 4.4)
console.log(car);
    console.log(car.drive());
    car.info();
console.log(car.increaseMaxSpeed(50));
console.log(car.changeYear(2020));
console.log(car.addDriver({draivername:"Vitalii",age:30,experience:5}))
console.log(car);



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class NewCar {
    constructor(model, manufacturer, yearOfIssue, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfIssue = yearOfIssue;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    };
   info() {
        for (const item in this) {
            if (typeof this[item] !== 'function') {

                console.log(`${item} - ${this[item]}`)
            }
        }
    };
    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed = this.maxSpeed + newSpeed;
    };
    changeYear(newValue) {
        return this.yearOfIssue = newValue;
    };
    addDriver(driver) {
        return this.driver = driver;
    }
}

let carNew = new NewCar('BMW 8','Germany', 2019,250, 4.4)
console.log(carNew);
console.log(carNew.drive());
carNew.info();
console.log(carNew.increaseMaxSpeed(50));
console.log(carNew.changeYear(2020));
console.log(carNew.addDriver({draivername:"Vitalii",age:30,experience:5}))
console.log(carNew)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(herName, age, footSize) {
        this.herName = herName;
        this.age = age;
        this.footSize = footSize;
    }
}

let arrCinderella = [
    cinderella1 = new Cinderella('Tata', 20, 36),
    cecinderella2 = new Cinderella('Mani', 24, 38),
    cecinderella3 = new Cinderella('Viki', 22, 35),
    cecinderella4 = new Cinderella('Nini', 26, 33),
    cecinderella5 = new Cinderella('Gufi', 29, 37),
    cecinderella6 = new Cinderella('Fina', 22, 34),
    cecinderella7 = new Cinderella('Kima', 19, 32),
    cecinderella8 = new Cinderella('Dina', 25, 39),
    cecinderella9 = new Cinderella('Inna', 19, 31),
    cecinderella10 = new Cinderella('Lisa', 20, 30)
];
console.log(arrCinderella);


class Prince {
    constructor(hisname, age, slipper) {
        this.hisname = hisname;
        this.age = age;
        this.slipper = slipper;
    }
}
let prince = new Prince('Stefkoo', 22, 32);


let cinderellaPrince = (arrCinderella, prince) => {
    for (const cinderella of arrCinderella) {
        if (cinderella.footSize === prince.slipper) {
            return `${cinderella.herName} - ти знайшов свою Попелюшку!`
        }
    }
};
console.log(cinderellaPrince(arrCinderella, prince));



let cinderellaPrinceFind = arrCinderella.find((value) => value.footSize === prince.slipper);
console.log(cinderellaPrinceFind);