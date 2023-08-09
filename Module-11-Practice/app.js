class Person {
    constructor(nm, age) {
        this.name = nm;
        this.age = age;
        this.greet = function () {
            console.log(`Hi I'm ${this.name} and I'm ${this.age} years old`);
        };
    }
    printAge() {
        console.log('Age : ', this.age);
    }
}

Person.prototype.nationality = 'Indian';
Person.prototype.hobbie = 'Coding';

const p = new Person('Biren', 22);
p.greet();
p.printAge();

console.log('Nationality : ', p.nationality);
console.log('Hobbie : ', p.hobbie);

console.dir(p);
console.log('p.__proto__ : ', p.__proto__);
console.log('Person.prototype : ', Person.prototype);

function fun() {
    console.log('fun');
}

console.log(fun.prototype);
