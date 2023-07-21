// getting the input and output fields elements...
const defaultResult = 0;
let currentResult = defaultResult;
let logEntreies = [];

const userInput = document.getElementById("getNumber");
const btnAdd = document.getElementById("btnAddition");
const btnSub = document.getElementById("btnSubtraction");
const btnMul = document.getElementById("btnMultiplication");
const btnDiv = document.getElementById("btnDivision");

const equation = document.getElementById("equation");
const result = document.getElementById("result");

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

// simple arithmetic operation functions starts...
function addition() {
    const num = getNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + num;
    generateEquation('+',initialResult,num);
    result.textContent = `Result : ${currentResult}`;

    const logEntry = {
        operation: "ADD",
        prevResult: initialResult,
        number: num,
        op: currentResult
    };
    logEntreies.push(logEntry);
    console.log(logEntreies.operation);
}

function subtraction() {
    const num = getNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - num;
    generateEquation('-',initialResult,num);
    result.textContent = `Result : ${currentResult}`;

    const logEntry = {
        operation: "SUB",
        prevResult: initialResult,
        number: num,
        op: currentResult
    };

    logEntreies.push(logEntry);
    console.log(logEntreies);
}

function multiplication() {
    const num = getNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * num;
    generateEquation('*',initialResult,num);
    result.textContent = `Result : ${currentResult}`;

    const logEntry = {
        operation: "MUL",
        prevResult: initialResult,
        number: num,
        op: currentResult
    };

    logEntreies.push(logEntry);
    console.log(logEntreies);
}

function division() {
    const num = getNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / num;
    generateEquation('/',initialResult,num);
    result.textContent = `Result : ${currentResult}`;

    const logEntry = {
        operation: "DIV",
        prevResult: initialResult,
        number: num,
        op: currentResult
    };

    logEntreies.push(logEntry);
    console.log(logEntreies);
}
// simple arithmetic operation function ends...