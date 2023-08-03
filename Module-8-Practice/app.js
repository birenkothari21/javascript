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

// const data = 'Biren;kothari;20';
// const splitData = data.split(';');
// console.log(splitData);

// const nameFragments = ['Biren', 'Kothari'];
// const fullName = nameFragments.join(' ');
// console.log(`Full Name : ${fullName}`);

// Map()......

// const testArr = [1, 2, 3, 4, 5];

// const squareOf = testArr.map((ele) => ele * ele);

// console.log(testArr, squareOf);

// Sort()......

// let testArr = ['abc', 'cba', 'acb', 'cab', 'bca', 'bac'];
// console.log(`Unsorted Array : ${testArr}`);

// testArr = testArr.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });
// console.log(`Sorted Array : ${testArr}`);
// console.log(`Reversed Sorted Array : `, testArr.reverse());

// filter()...
// const test = [2, 4, 7, 9, 12, 56, 23];
// const filterArr = test.filter((ele) => ele > 10);

// console.log(test, filterArr);

// reduce().......
// const test = [10, 20, 30, 40, 50];

// const product = test.reduce((prev, curr) => prev * curr, 1);

// console.log(`Result of Product of ${test} is : ${product}`);

// Destructuring....

// const namedata = ['John', 'Doe'];
// const [firstName, lastName] = namedata;
// console.log(firstName, lastName);

// Spread OPerator [...] ......

// const names = ['Mihir', 'Sagar', 'Bhavya', 'Umang'];
// const copiedNames = [...names];
// names.push('Naman');
// console.log(names);
// console.log(copiedNames);

// const temperatures = [40, 35, 25, 32, 23, 42];
// console.log('Minimum Temperature : ', Math.min(...temperatures));
// console.log('Minimum Temperature : ', Math.max(...temperatures));

// const persons = [
//     { name: 'Biren', age: 22 },
//     { name: 'Kush', age: 19 },
// ];

// const copiedPersons1 = [...persons];
// const copiedPersons2 = persons.map((person) => ({
//     name: person.name,
//     age: person.age,
// }));

// persons.push({ name: 'Raj', age: 28 });
// persons[0].age = 23;
// console.log(persons);
// console.log(copiedPersons1);
// console.log(copiedPersons2);


" 1) write a program following pattern.
*                           
* *  
* * *  
* * * *  
* * * * *                                                                           DONE                                                          
2) Find the sum of all elements of a given array? Ex. like arr = [1, 6, 17, 70, 85];    DONE
3) convert one string into array and  get all 'e' from the string and append occurence number of e to it  like   srefere -> ['0e','1e','2e'  ] without using (for,while)  loop    BLOCK
4)  Create an array of numbers (of your choice) and perform three array
        operations on it: filter for numbers greater than 5, map every number to
        an object which holds the number on some property (e.g. ""num"") and
        reduce the array to a single number (the multiplication of all numbers).     BLOCK
5)     Write a function (""findMax"") which executes some logic that finds the
        largest number in a list of arguments. Pass the array from task 1 split
        up into multiple arguments to that function.
6)     Tweak the ""findMax"" function such that it finds both the minimum and
        maximum and returns those as an array. Then use destructuring when
        calling the function to store the two results in separate constants.
7)     Create a list (and possibly some surrounding logic) where you ensure
        that NO duplicate values can be added. Use whichever approach seems
        appropriate to you.      DONE"