let person1 = { name: 'Max', age: 30, isAdmin: true };
let person2 = { name: 'Max', age: 25, isAdmin: false };

// comparing two object, but returns false
if (person1 == person2) {
    console.log(true);
} else {
    console.log(false);
}

// comparing two objects with data type, returns false
if (person1 === person2) {
    console.log(true);
} else {
    console.log(false);
}

// comparing properties of the object with data type, return true
if (person1.name === person2.name) {
    console.log(true);
} else {
    console.log(false);
}

// with logical AND and OR operators
if ((person1.name === 'Max' && person1.age <= 30) || person1.isAdmin) {
    console.log(true);
} else {
    console.log(false);
}

// for loop example
console.log('*******');
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// for-of & for-in loop example
console.log('*******');
let marks = [];
let stud1 = { java: 90, react: 89, node: 67 };
let stud2 = { java: 64, react: 78, node: 64 };
let stud3 = { java: 55, react: 72, node: 84 };

marks.push(stud1, stud2, stud3);

for (const mark of marks) {
    for (const key in mark) {
        console.log(`${key} : ${mark[key]}`);
    }
    console.log('----');
}

// scopes of vareiables declared using 'let', 'var' and 'const'
{
    var name = 'bk';
    let age = 29;
    console.log(name);
    console.log(age);
}
console.log(name);
console.log(age);
