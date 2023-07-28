// rest operator (...) & 'arguments' keyword,
// function inside a function,
// callback function...
// bind method...

const combine = (resultHandler, operation, ...numbers) => {
    // function inside a function...
    const validator = (num) => {
        return isNaN(num) ? 0 : num;
    };

    let res = 0;
    for (const num of numbers) {
        if (operation === 'ADD') {
            res += validator(num);
        } else {
            res -= validator(num);
        }
    }
    resultHandler(res);
};

// callback function...
const showResult = (msg, result) => {
    console.log(`${msg} ${result}`);
};

combine(
    showResult.bind(this, 'Result of Addition is : '),
    'ADD',
    1,
    3,
    5,
    7,
    9
);
combine(
    showResult.bind(this, 'Result of Subtraction is : '),
    'SUBTRACT',
    1,
    3,
    5,
    7,
    9
);
