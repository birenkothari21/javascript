// class Person {
//     constructor(nm, age) {
//         this.name = nm;
//         this.age = age;
//         this.greet = function () {
//             console.log(`Hi I'm ${this.name} and I'm ${this.age} years old`);
//         };
//     }
//     printAge() {
//         console.log('Age : ', this.age);
//     }
// }

// Person.prototype.printAge = function () {
//     console.log('Age using prototype : ', this.age);
// };
// Person.prototype.nationality = 'Indian';
// Person.prototype.hobbie = 'Coding';

// const p = new Person('Biren', 22);
// p.greet();
// p.printAge();

// console.log('Type of P : ', typeof p);
// console.log('Nationality : ', p.nationality);
// console.log('Hobbie : ', p.hobbie);

// console.dir(p);
// console.log('p.__proto__ : ', p.__proto__);
// console.log('Person.prototype : ', Person.prototype);

// function fun() {
//     console.log('fun');
// }

// const f1 = new fun();
// console.log(f1);

// class AgedPerson {
//     printAge() {
//         console.log(this.age);
//     }
// }

// class Person extends AgedPerson {
//     constructor(nm, age) {
//         super();
//         this.name = nm;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
//     }
// }

// const p1 = new Person('Abc', 22);
// const p2 = new Person('Abc', 22);

// console.dir(Person);
// console.log(p1);
// console.log('Person.__proto__ : ', p1);
// console.log('Person.prototype : ', p1.prototype);
// console.log('Person.prototype.__proto__ : ', Person.prototype.__proto__);

// console.log(Object);
// console.log('Object.__proto__ : ', Object.__proto__);
// console.log('Object.prototype : ', Object.prototype);

// function Person() {
//     this.name = 'A';
//     this.age = 22;

//     this.greet = function () {
//         console.log('hi');
//     };
// }

// Person.prototype.print = function () {
//     console.log(this.name, this.age);
// };

// const p = new Person();
// console.log(p);
// console.log(Person.prototype);

const Car = Object.create({});

Object.defineProperty(Car, 'modalName', { value: 'Punch' });
Object.defineProperty(Car, 'modalYear', { value: 2020 });
Object.defineProperty(Car, 'carCompany', { value: 'Tata' });
Object.defineProperty(Car, 'color', {
    value: 'white',
    writable: false,
});

console.log(Car['modalName']);

for (const key in Car) {
    if (Object.hasOwnProperty.call(Car, key)) {
        console.log(Car[key]);
    }
    console.log(key);
}

const Person = {
    name: 'A',
    age: 20,
};

console.log(Person);
for (const key in Person) {
    if (Object.hasOwnProperty.call(Person, key)) {
        console.log(key);
    }
}
