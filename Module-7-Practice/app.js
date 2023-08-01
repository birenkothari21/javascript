const btn = document.querySelector('button');

const newWindow = () => {
    const newWindow = open('', 'New Window');
    newWindow.document.write('Hello World');
};

btn.addEventListener('click', newWindow);
const h1 = document.getElementById('title');
console.log(h1);
console.dir(h1);

const listItems = document.querySelectorAll('li');

for (const li of listItems) {
    console.dir(li);
}

const inpt = document.getElementById('nm');
inpt.value += ' (Changed!)';
