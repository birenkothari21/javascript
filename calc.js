// getting the input and output fields elements...
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //  creating the array to store the operation log data

const userInput = document.getElementById('getNumber');
const btnAdd = document.getElementById('btnAddition');
const btnSub = document.getElementById('btnSubtraction');
const btnMul = document.getElementById('btnMultiplication');
const btnDiv = document.getElementById('btnDivision');

const equation = document.getElementById('equation');
const result = document.getElementById('result');

// add click eventlistener on buttons...
btnAdd.addEventListener('click', addition);
btnSub.addEventListener('click', subtraction);
btnMul.addEventListener('click', multiplication);
btnDiv.addEventListener('click', division);

// function to get and convert the input into number...
function getNumberInput() {
    return parseInt(userInput.value);
}

// function to generate the equation...btnmultiplication
function generateEquation(operator, resultBeforeCalc, inputNumber) {
    equation.textContent = `Equation : ${resultBeforeCalc} ${operator} ${inputNumber}`;
}

// funciton to create the operation log / history and print in the console
function operationLog(operationIdentifier, prevResult, number, output) {
    const logEntry = {
        //  creating object and store the info
        operation: operationIdentifier,
        prevResult: prevResult,
        number: number,
        output: output,
    };

    logEntries.push(logEntry); //  store log object into array
    console.log(logEntry.operation); //  Accessing object property / data
    console.log(logEntries);
}

function calculate(calculationType) {
    const num = getNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if (calculationType === 'ADD') {
        currentResult += num;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= num;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= num;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= num;
        mathOperator = '/';
    }

    result.textContent = `Result : ${currentResult}`;
    generateEquation(mathOperator, initialResult, num);
    operationLog(calculationType, initialResult, num, currentResult);
}

// simple arithmetic operation functions starts...
function addition() {
    calculate('ADD');
}

function subtraction() {
    calculate('SUBTRACT');
}

function multiplication() {
    calculate('MULTIPLY');
}

function division() {
    calculate('DIVIDE');
}
// simple arithmetic operation function ends...
