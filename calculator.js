// how to get order of operations?
// randomly scramble numbers, give 69 half the time, and make the non-69s off by one
// change flex so that all resize dynamically

createCalc();

// function to make calculator size with screen and populate with numbers and operators
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
    decimal.classList.add('operatorButton');
    decimal.textContent = ".";
    zeroRow.appendChild(decimal);

    const equals = document.createElement('button');
    equals.setAttribute('style', `width: ${squareSide()*2+8}px; height: ${squareSide()}px;`);
    equals.classList.add('operatorButton');
    equals.textContent = "=";
    zeroRow.appendChild(equals);

    zeroRow.classList.add('zeroRow');
    console.log(zeroRow);
    zeroContainer.appendChild(zeroRow);


    const displayRow = document.createElement('input');
    displayRow.setAttribute('type', 'text')
    displayRow.setAttribute('style', `width: ${squareSide()*4+10}px; height: ${squareSide()}px;`);
    displayContainer.appendChild(displayRow);
}

//function to find width/height of squares
function squareSide() {
    let height = window.innerHeight / 8;
    console.log('height' + height);
    //ideally this would be live responding to user resizing window
        return height;
}