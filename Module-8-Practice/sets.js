const ids = new Set([1, 2, 3, 10]);

ids.add(4);
console.log(ids);

ids.delete(10);
console.log(ids);
console.log(ids.has(3));
console.log('Size of Set : ', ids.size);
console.log('Keys of Set : ', ids.keys());
console.log('Values of Set : ', ids.values());
console.log('Entries of Set : ', ids.entries());

for (const id of ids.values()) {
    console.log(id);
}

for (const id of ids) {
    console.log(id);
}

ids.clear();
console.log(ids);

// console.log('--------------------------');
// const objs = [
//     { name: 'A', age: 10 },
//     { name: 'B', age: 20 },
//     { name: 'C', age: 30 },
// ];

// const setObjes = new Set(objs);

// console.log(setObjes);
// setObjes.add({ name: 'Kush', age: 21 });
// console.log(setObjes);
// console.log(setObjes.has(3));
// console.log('Size of Set : ', setObjes.size);
// console.log('Keys of Set : ', setObjes.keys());
// console.log('Values of Set : ', setObjes.values());
// console.log('Entries of Set : ', setObjes.entries());
// for (const obj of setObjes.values()) {
//     console.log(obj);
// }
// console.log('---');
// for (const obj of setObjes) {
//     console.log(obj);
// }

let per = [
    { name: 'A', age: 20 },
    { name: 'B', age: 23 },
    { name: 'A', age: 20 },
];

const per2 = per;
const persons = new WeakSet(per);
console.log(persons);
persons.add(per2[0]);
persons.add(per2[1]);
persons.add(per2[2]);
console.log(persons);
