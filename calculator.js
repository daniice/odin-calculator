// randomly scramble numbers, give 69 half the time, and make the non-69s off by one
// have parentheses
// have possibility to enter negative
// allow further calculation upon equals
// could be a much better storage structure - Kenny genuis boy


createCalc();


//on click behavior to populate input array
let currentNumb = new Array();
let input = new Array();
let multDiv = new Array();
let solution;
const display = document.querySelector('.display');
const displayContainer = document.querySelector('#displayContainer');

let numberButtons = document.querySelectorAll('.numberButton');
Array.from(numberButtons).forEach(function(button) {
    button.addEventListener('click', () => {
        if (solution) {
          input = [];
          solution = '';
        }
        currentNumb.push(button.textContent);
        display.textContent = strand(input) + strand(currentNumb);
    })
})

let operatorButtons = document.querySelectorAll('.operatorButton');
Array.from(operatorButtons).forEach(function(button) {
    button.addEventListener('click', () => {
      if (currentNumb.length>0 && input.length<=10) {
        // console.log(button.textContent);
        input.push(strand(currentNumb));
        currentNumb = [];
        input.push(button.textContent);
        display.textContent = strand(input);
    }})
})

//on equals, evaluate through expression according to order of operations, display solution, clear input array, then populate first index with solution
let equals = document.querySelector('.equalsButton');
equals.addEventListener('click', () => {
  //console.log('equals');
  input.push(strand(currentNumb));
  currentNumb = [];

  for (let i=0; i<input.length; i++) {
    if (input[i] === 'x') {
      wop = parseFloat(input[i-1]) * parseFloat(input[i+1]);
      multDiv.splice(multDiv.length - 1, 1, wop);
      input.splice(i+1, 1, wop);
      }
    else if (input[i] === '÷') {
      if (parseFloat(input[i+1]) === 0) {
        alert('This answer is currently being debated by the best philosophers out there. We cannot help.');
        multDiv = [];
        input = [];
        display.textContent = '';
      }
      else {
        wop = parseFloat(input[i-1]) / parseFloat(input[i+1]);
        multDiv.splice(multDiv.length - 1, 1, wop);
        input.splice(i+1, 1, wop);
      }}
    else {
      multDiv.push(input[i]);
      }
    }

  for (let j=0; j<multDiv.length; j++) {
    if (multDiv[j] === '+') {
      wop = parseFloat(multDiv[j-1]) + parseFloat(multDiv[j+1]);
      multDiv.splice(j+1, 1, wop);
      }
    else if (multDiv[j] === '-') {
      wop = parseFloat(multDiv[j-1]) - parseFloat(multDiv[j+1]);
      multDiv.splice(j+1, 1, wop);
      }
    }

    solution = multDiv[multDiv.length - 1];
    multDiv = [];
    display.textContent = solution;

})


//function to reduce array to string
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

    const displayRow = document.createElement('div');
    displayRow.classList.add('display');
    displayContainer.appendChild(displayRow);

    for (i=1; i<=3; i++) {
        const numberRow = document.createElement('div');
            for (j=1; j<=3; j++) {
                const number = document.createElement('button');
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
        operate.classList.add('operatorButton');
        operate.textContent = operator;
        operatorColumn.appendChild(operate);
    })
    operatorColumn.classList.add('operatorColumn')
    operatorContainer.appendChild(operatorColumn);

    
    const zeroRow = document.createElement('div');
    const zero = document.createElement('button');
    zero.classList.add('numberButton');
    zero.textContent = "0";
    zeroRow.appendChild(zero);
    
    const decimal = document.createElement('button');
    decimal.classList.add('numberButton');
    decimal.textContent = ".";
    zeroRow.appendChild(decimal);

    const equals = document.createElement('button');
    equals.classList.add('equalsButton');
    equals.textContent = "=";
    zeroRow.appendChild(equals);

    zeroRow.classList.add('zeroRow');
    //console.log(zeroRow);
    zeroContainer.appendChild(zeroRow);
}

