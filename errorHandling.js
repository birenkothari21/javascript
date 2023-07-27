const btn = document.getElementById('btn');
const number = document.getElementById('num');

btn.addEventListener('click', getResult);

function getNum() {
    if (isNaN(parseInt(number.value))) {
        throw { message: 'Invalid Input, Please Enter Valid Number... ' };
    }
    return parseInt(number.value);
}

function getResult() {
    try {
        console.log(getNum());
    } catch (error) {
        console.log(error);
    } finally {
        console.log('----');
    }
}
