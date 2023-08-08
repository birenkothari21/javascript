// console.log('Alone this : ', this);      //  window object

// function test() {
//     console.log('this using inside simple function : ', this);
// }
// test();          //  window object

// const test = () => this;
// console.log('this using arrow function : ', test());  // window object

// const per = {
//     name: 'A',
//     age: 20,
//     sayname: () => this.name + this.age,
// };

// console.log('this using arrow function : ', per.sayname()); //  undefined

// 'use strict';

// function test() {
//     console.log('this using strict mode : ', this);
// }

// test();

// function test() {
//     console.log(this);               //  this with simple function with eventlistener - return Dom element
// }

// const test = () => {
//     console.log(this); //  this with arrow function with eventlistener - return window object
// };

// document.getElementById('btn').addEventListener('click', test);

// const per = {
//     name: 'A',
//     age: 20,
//     test() {
//         console.log(this);
//         return this;
//     },
// };

// console.log('this using arrow function : ', per.test()); //  return object

// const per = {
//     name: 'A',
//     age: 20,
//     test() {
//         const test1 = () => {
//             console.log(this);
//         };

//         test1();
//         console.log(this);
//     },
// };

// console.log('this using arrow function : ', per.test()); //  undefined

// const person1 = {
//     name: 'Pedro',
//     surname: 'Sanchez',
//     sayName() {
//         return this.name + ' ' + this.surname;
//     },
// };

// const person2 = {
//     name: 'B',
//     surname: 'K',
// };

// console.log(person1.sayName.call(person1));
// console.log(person1.sayName.call(person2));

// const person1 = {
//     name: 'Pedro',
//     surname: 'Sanchez',
//     sayName: function (city, country) {
//         return this.name + ' ' + this.surname + ', ' + city + ', ' + country;
//     },
// };

// const person2 = {
//     name: 'B',
//     surname: 'K',
// };

// console.log(person1.sayName.apply(person1, ['DF', 'Mexico']));
// console.log(person1.sayName.apply(person2, ['Vsvd', 'India']));
// console.log(person1.sayName.apply(this, ['Vsvd', 'India']));

// const person1 = {
//     name: 'Pedro',
//     surname: 'Sanchez',
//     sayName: function () {
//         return person1.name + ' ' + person1.surname;
//     },
// };

// const person2 = {
//     name: 'B',
//     surname: 'K',
// };

// // const sayPerson2Name = person1.sayName.bind(person2);
// const sayPerson2Name = person1.sayName.bind(person1);
// // const sayPerson2Name = person1.sayName.bind(this);

// console.log(sayPerson2Name());

// const list = [
//     {
//         name: 'A',
//         age: 20,
//         upp() {
//             return this.name.toUpperCase();
//         },
//     },
//     {
//         name: 'B',
//         age: 23,
//         upp() {
//             return this.name.toUpperCase(); // not working
//         },
//     },
// ];

// list.forEach((item) => {
//     console.log(item.upp());
// });

// const per = {
//     name: 'A',
//     age: 20,
//     sayname: () => {
//         console.log(this);
//         console.log(this.name + this.age);
//         return this.name;
//     },
//     // sayname: function () {
//     //     console.log(this);
//     //     console.log(this.name);
//     //     return this.name;
//     // },
// };

// const name = per.sayname.bind(per);

// console.log('this using arrow function : ', per.sayname()); //  undefined

// function Car(type, fuelType) {
//     this.type = type;
//     this.fuelType = fuelType;
//     console.log(this.type, this.fuelType);
// }

// function setBrand(brand) {
//     Car.call(this, 'convertible', 'petrol');
//     this.brand = brand;
//     console.log(`Car details = `, this);
// }

// function definePrice(price) {
//     Car.call(this, 'convertible', 'diesel');
//     this.price = price;
//     console.log(`Car details = `, this);
// }

// const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);
