// // creating array...
// const number1 = [1, 2, 3, 4, 5];
// const names1 = ['Bhargav', 'Vivek', 'Mihir', 'Sagar', 'Bhavya'];

// const number2 = Array(1, 2, 3, 4, 5);
// const names2 = Array('Bhargav', 'Vivek', 'Mihir', 'Sagar', 'Bhavya');

// const number3 = new Array(1, 2, 3, 4, 5);
// const names3 = new Array('Bhargav', 'Vivek', 'Mihir', 'Sagar', 'Bhavya');

// const number4 = Array.of(1, 2, 3, 4, 5);
// const names4 = Array.of('Bhargav', 'Vivek', 'Mihir', 'Sagar', 'Bhavya');

// const lst = document.querySelectorAll('li');

// const number5 = Array.from(lst);
// const names5 = Array.from('Biren');

// console.log(
//     number1,
//     names1,
//     number2,
//     names2,
//     number3,
//     names3,
//     number4,
//     names4,
//     number5,
//     names5
// );

// const hobbies = ['Sports', 'Reading'];
// console.log(hobbies);

// hobbies.push('Coding');
// console.log(hobbies);

// hobbies.unshift('Cooking');
// console.log(hobbies);

// hobbies.pop();
// console.log(hobbies);

// hobbies.shift();
// console.log(hobbies);

// const lang = ['Gujarati', 'Hindi', 'Sanskrit'];
// console.log(lang);
// lang.splice(5, 0, 'English');
// console.log(lang);

// const removedEl = lang.splice(-1, 1);
// console.log(removedEl, lang);

// const lang = ['Guj', 'Hnd', 'En'];
// const el = lang.slice(0, 3);
// console.log(lang, el);

// const concatArr = testArr.concat([1, 3]);
// console.log(testArr, concatArr);

// const testArr = [2, 4, 6, 8, 10];
// console.log(testArr.indexOf(10));
// testArr.push(4);
// console.log(testArr, testArr.lastIndexOf(4));

// const personData = [
//     { name: 'Biren', age: 22 },
//     { name: 'Kush', age: 19 },
//     { name: 'Bhavya', age: 22 },
// ];
// console.log(personData);

// const findPersonIndex = personData.findIndex((person, idx, personData) => {
//     return person.name === 'Bhavya';
// });

// const findPerson = personData.find((person, idx, personData) => {
//     return person.name === 'Bhavya';
// });

// console.log(findPersonIndex, findPerson);

// const testArr = ['Guj', 'Hindi', 'Sanskrit'];
// console.log(testArr, testArr.includes('Hindi'));

// const prices = [10, 15, 5, 30, 4];
// const tax = 0.2;
// const totalPrice = [];

// prices.forEach((price) => {
//     const taxAmt = price * (1 + tax);
//     totalPrice.push({ Total: taxAmt });
// });
// console.log(prices);
// console.log(totalPrice);

const data = 'Biren;kothari;20';
const splitData = data.split(';');
console.log(splitData);

const nameFragments = ['Biren', 'Kothari'];
const fullName = nameFragments.join(' ');
console.log(`Full Name : ${fullName}`);
