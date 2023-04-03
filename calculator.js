// randomly scramble numbers, give 69 half the time, and make the non-69s off by one
// change flex so that all resize dynamically
// have parentheses
// have possibility for negative
// allow further calculation upon equals


createCalc();


//on click behavior to populate input array
let currentNumb = new Array();
let input = new Array();
let solution;
const display = document.querySelector('.display');

let numberButtons = document.querySelectorAll('.numberButton');
Array.from(numberButtons).forEach(function(button) {
    button.addEventListener('click', () => {
        if (solution) input = [];
        currentNumb.push(button.textContent);
        display.textContent = strand(input) + strand(currentNumb);
    })
})

let operatorButtons = document.querySelectorAll('.operatorButton');
Array.from(operatorButtons).forEach(function(button) {
    button.addEventListener('click', () => {
      if (currentNumb.length > 0) {
        // console.log(button.textContent);
        input.push(currentNumb);
        currentNumb = [];
        input.push(button.textContent);
        display.textContent = strand(input);
    }})
})


//on equals, evaluate through expression according to order of operations, display solution, clear input array, then populate first index with solution
let equals = document.querySelector('.equalsButton');
equals.addEventListener('click', () => {
  input.push(currentNumb);
  currentNumb = [];
  let multDiv = new Array();

    for (let i=0; i<input.length; i++) {
      if (input[i] === 'x') {
        wop = parseFloat(input[i-1] * parseFloat(input[i+1]));
        multDiv.splice(multDiv.length - 1, 1, wop);
        input.splice(i+1, 1);
      }
      else if (input[i] === '÷') {
        wop = parseFloat(input[i-1] / parseFloat(input[i+1]));
        multDiv.splice(multDiv.length - 1, 1, wop);
        input.splice(i+1, 1);
      }
      else {
        multDiv.push(input[i]);
      }
    }

    for (let j=0; j<multDiv.length; j++) {
      if (input[j] === '+') {
        wop = parseFloat(input[j-1] + parseFloat(input[j+1]));
        input.splice(i-1, 3, wop);
      }
      else if (input[j] === '-') {
        wop = parseFloat(input[i-1] - parseFloat(input[i+1]));
        input.splice(i-1, 3, wop);
      }
    }

    input.push(solution);
})


//function to reduct array to string
function strand(arr) {
    let final = '';
    arr.forEach(function(entry) {
        final = final + entry;
    })
    return final;
}

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
    equals.classList.add('equalsButton');
    equals.textContent = "=";
    zeroRow.appendChild(equals);

    zeroRow.classList.add('zeroRow');
    //console.log(zeroRow);
    zeroContainer.appendChild(zeroRow);


    const displayRow = document.createElement('div');
    displayRow.setAttribute('style', `width: ${squareSide()*4+14}px; height: ${squareSide()}px;`);
    displayRow.classList.add('display');
    displayContainer.appendChild(displayRow);
}

//function to find width/height of squares
function squareSide() {
    let height = window.innerHeight / 8;
    //console.log('height' + height);
    //ideally this would be live responding to user resizing window
        return height;
}

//adding
function add(num1, num2){
let solution = parseFloat(num1) + parseFloat(num2);
return solution;
}

//subtracting
function subtract(num1, num2){
let solution = parseFloat(num1) - parseFloat(num2);
return solution;
}

//multiplying
function multiply(num1, num2){
let solution = parseFloat(num1) * parseFloat(num2);
return solution;
}

//dividing
function divide(num1, num2){
if (parseFloat(num2) === 0) {
    alert('This answer is currently in debate by the best philosophers out there. We cannot help.');
    input = [];
    display.textContent = '';
}
else { let solution = parseFloat(num1)/parseFloat(num2);
return solution;
}
}
