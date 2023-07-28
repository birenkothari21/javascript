// default parameter..

const btnFun = document.getElementById('btn');

const getNum = () => {
    //  arrow function...
    let num = prompt('Enter Number : ', '');
    if (isNaN(num) || num.length <= 0) {
        return undefined;
    }
    return num;
};

function getRes(n1 = 10, n2 = 20) {
    return parseInt(n1) + parseInt(n2);
}

btnFun.addEventListener('click', function () {
    // anonymous function...
    const n1 = getNum();
    const n2 = getNum();
    const res = getRes(n1, n2);

    console.log(`Result : ${res}`);
});
