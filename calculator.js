// ideal to-do:
// randomly scramble numbers, give 69 half the time, and make the non-69s off by one
// have parentheses
// have possibility to enter negative
// allow further calculation upon equals
// could be a much better storage structure - Kenny genuis boy idea started at bottom
// fix floating weirdness
// limit on number of numbers entered
// help Odin with order of operations on project
// add a clear button
// add a backspace button
// add keyboard support


createCalc();


//on click behavior to populate input array
let currentNumb = new Array();
let input = new Array();
let multDiv = new Array();
let solution;
const display = document.querySelector('.display');

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

let deci = document.querySelectorAll('.deci');
Array.from(deci).forEach(function(button) {
    button.addEventListener('click', () => {
      if (!currentNumb.includes('.')) {
        if (solution) {
          input = [];
          solution = '';
        }
        currentNumb.push(button.textContent);
        display.textContent = strand(input) + strand(currentNumb);
}})
})

let operatorButtons = document.querySelectorAll('.operatorButton');
Array.from(operatorButtons).forEach(function(button) {
    button.addEventListener('click', () => {
      if (currentNumb.length>0) {
        console.log(button.textContent);
        input.push(strand(currentNumb));
        currentNumb = [];
        input.push(button.textContent);
        display.textContent = strand(input);
    }})
})

//on equals, evaluate through expression according to order of operations, display solution, clear input array, then populate first index with solution
let equals = document.querySelector('.equalsButton');
equals.addEventListener('click', () => {
  console.log('equals');
  if (currentNumb.length>0 && input.length > 1 && currentNumb[currentNumb.length - 1] != '+' && currentNumb[currentNumb.length - 1] != '-' && currentNumb[currentNumb.length - 1] != 'x' && currentNumb[currentNumb.length - 1] != '÷') {

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
        console.log(input);
        wop = parseFloat(input[i-1]) / parseFloat(input[i+1]);
        multDiv.splice(multDiv.length - 1, 1, wop);
        console.log(multDiv);
        input.splice(i+1, 1, wop);
        console.log(input);
      }}
    else {
      if (i != input.length-1 || input[i-1] === '+' || input[i-1] === '-') multDiv.push(input[i]);
      }
    }

  for (let j=0; j<multDiv.length; j++) {
    if (multDiv[j] === '+') {
      console.log(multDiv);
      wop = parseFloat(multDiv[j-1]) + parseFloat(multDiv[j+1]);
      multDiv.splice(j+1, 1, wop);
      console.log(multDiv);
      }
    else if (multDiv[j] === '-') {
      wop = parseFloat(multDiv[j-1]) - parseFloat(multDiv[j+1]);
      multDiv.splice(j+1, 1, wop);
      }
    }

    solution = multDiv[multDiv.length - 1];
    multDiv = [];
    if (solution === 0) {
      solution = 1
      display.textContent = 0;
    }
    else display.textContent = solution;

}})


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
    decimal.classList.add('deci');
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



//let currentNumb = new Array();
//let running = new Array();
//const display = document.querySelector('.display');
//let disp = '';
//let disp1;
//let tempSolution;

//let numberButtons = document.querySelectorAll('.numberButton');
//Array.from(numberButtons).forEach(function(button) {
  //button.addEventListener('click', () => {
    //if button is deci, make sure is only one in currentNumb
    //button display behavior
    //disp1 = disp + button.textContent;
    //disp = disp1;
    //display.textContent = disp;

    //button storage and calcs
    //currentNumb.push(button.textContent);
    //})})

  //let operatorButtons = document.querySelectorAll('.operatorButton');
  //Array.from(operatorButtons).forEach(function(button) {
    //button.addEventListener('click', () => {
      //if (currentNumb.length>0) {
        //button display behavior
        //console.log('hi')
        //disp1 = disp + button.textContent;
        //disp = disp1;
        //display.textContent = disp;

        //button storage and calcs
        //running.push(strand(currentNumb));
        //currentNumb = [];
        //if (running.length>=3 && (button.textContent === "+" || button.textContent === "-")) {

        //}
      //  running.push(button.textContent);
    //    }
  //    })})

//function evaluate(arr) {
  //arr.forEach(function(entry) {

  //}
//)}