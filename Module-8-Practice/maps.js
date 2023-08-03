const prsn1 = 'A';
const prsn2 = 'B';
const prsn3 = 'C';
const prsn4 = 'D';

const personData = new Map([
    [prsn1, 'Person 1'],
    [prsn2, 'Person 2'],
    [prsn3, 'Person 3'],
    [prsn4, 'Person 4'],
]);

const personData2 = new Map([
    ['A', 'Person 1'],
    ['B', 'Person 2'],
]);
console.log(personData);
console.log(personData2);

personData.set('E', 'Person 5');
personData.delete('C');
console.log('Size : ', personData.size);
console.log('Keys : ', personData.keys());
console.log('Values :', personData.values());
console.log('Entries : ', personData.entries());
console.log('If Map has "A" Key : ', personData.has('E'));
personData.clear();
console.log('After Cleared Map : ', personData);
