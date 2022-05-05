//normal variables
let result = 0;
let input = [];
let numberInputs = 0;
let calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
};
//DOM variables
const screen_span = document.getElementById("screen");
let buttonArray = document.getElementsByClassName("button");


function updateDisplay() {
    screen_span.textContent = calculator.displayValue;
}

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", function(){buttonPress(buttonArray[i].textContent)})
}

function buttonPress(button) {
    if (button === 'AC') {
        input = [];
        numberInputs = 0;
        result = 0;
    }
    else if (button === '=') {
        result = eval(input.join(''));
        input = [result];
    }
    else {
        input[numberInputs] = button;
        numberInputs++;
    }
    screen_span.textContent = input.join('').substring(0,13);
}