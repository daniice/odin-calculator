// randomly scramble numbers, give 69 half the time, and make the non-69s off by one
// change flex so that all resize dynamically
// have parentheses

createCalc();

//on click behavior to launch operations
let number1 = new Array();
let number2 = new Array();
let operation;
let storageNum = new Array();
let storageOp;

let numberButtons = document.querySelectorAll('.numberButton');
Array.from(numberButtons).forEach(function(button) {
    button.addEventListener('click', () => {
        if (!operation) number1.push(button.textContent);
        else number2.push(parseInt(button.textContent));
        //console.log(number1);
        //console.log(number2)
    })
})

let operatorButtons = document.querySelectorAll('.operatorButton');
Array.from(operatorButtons).forEach(function(button) {
    button.addEventListener('click', () => {
        if (number1 && !operation) operation = button.textContent();
        else if (number2 && (operation === 'x' || operation === '÷')) {
            let newNumber1 = calculate(number1, operation, number2);
            number1 = newNumber1;
            operation = button.textContent();
        }
        else if (number2 && (operation === '-' || operation === '+')) {
            storageNum = reduction(number1);
            storageOp = operation;
            operation = button.textContent();
            number1 = number2;

        }
    })
})

let 

//function to make calculator size with screen and populate with numbers and operators
function createCalc() {
    const numberContainer = document.querySelector('#numberContainer');
    const operatorContainer = document.querySelector('#operatorContainer');
    const displayContainer = document.querySelector('#displayContainer');
    const zeroContainer = document.querySelector('#zeroContainer');
    let count = 1;

    for (i=1; i<=3; i++) {
        const numberRow = document.createElement('div');
            for (j=1; j<=3; j++) {
                const number = document.createElement('button');
                number.setAttribute('style', `width: ${squareSide()}px; height: ${squareSide()}px;`);
                number.classList.add('numberButton');
                number.textContent = count;
                numberRow.appendChild(number);
                count ++;
}
    numberRow.classList.add('numberRow')
    numberContainer.appendChild(numberRow);
}

    const operatorColumn = document.createElement('div');
    const operators = ['+', '-', 'x', '÷'];
    operators.forEach(function(operator) {
        const operate = document.createElement('button');
        operate.setAttribute('style', `width: ${squareSide()}px; height: ${squareSide()*3/4}px;`);
        operate.classList.add('operatorButton');
        operate.textContent = operator;
        operatorColumn.appendChild(operate);
    })
    operatorColumn.classList.add('operatorColumn')
    operatorContainer.appendChild(operatorColumn);

    
    const zeroRow = document.createElement('div');

    const zero = document.createElement('button');
    zero.setAttribute('style', `width: ${squareSide()}px; height: ${squareSide()}px;`);
    zero.classList.add('numberButton');
    zero.textContent = "0";
    zeroRow.appendChild(zero);
    
    const decimal = document.createElement('button');
    decimal.setAttribute('style', `width: ${squareSide()}px; height: ${squareSide()}px;`);
    decimal.classList.add('numberButton');
    decimal.textContent = ".";
    zeroRow.appendChild(decimal);

    const equals = document.createElement('button');
    equals.setAttribute('style', `width: ${squareSide()*2+8}px; height: ${squareSide()}px;`);
    equals.classList.add('operatorButton');
    equals.textContent = "=";
    zeroRow.appendChild(equals);

    zeroRow.classList.add('zeroRow');
    //console.log(zeroRow);
    zeroContainer.appendChild(zeroRow);


    const displayRow = document.createElement('div');
    displayRow.setAttribute('style', `width: ${squareSide()*4+14}px; height: ${squareSide()}px; border: solid 0.1px; border-radius: 8px;`);
    displayContainer.appendChild(displayRow);
}

//function to find width/height of squares
function squareSide() {
    let height = window.innerHeight / 8;
    //console.log('height' + height);
    //ideally this would be live responding to user resizing window
        return height;
}

//function to determine which operation function to call
function calculate(number1, operation, number2) {
if (operation = '+') add(number1, number2);
else if (operation = '-') subtract(number1, number2);
else if (operation = 'x') multiply(number1, number2);
else divide(number1, number2);
}

//adding
function add(number1, number2){
let solution = number1 + number2;
return solution;
}

//subtracting
function subtract(number1, number2){
let solution = number1 - number2;
return solution;
}

//multiply
function multiply(number1, number2){
let solution = number1 * number2;
return solution;
}

//divide
function divide(number1, number2){
if (number2 = 0) alert('this answer is currently in debate by the best philosophers out there. We cannot help.');
else { let solution = number1/number2;
return solution;
}
}

//function to reduce number arrays into a number
function reduction(number) {
    let squished = number.reduce((total, digit) => {
        return total + digit;
      }, '');
    return squished;
}
