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
    if (!isNaN(parseInt(button))) {
        input[numberInputs] = parseInt(button);
        numberInputs ++;
    }
    else {
        switch(button) {
            case 'AC':
                input = [];
                input.filter(function (el) { return el !== NaN});
        }
    }
    console.log(input);
}