let firstNum = 0;
let operation = null;
let secondNum = 0;
let isTypingState = false;
const btns = document.querySelectorAll('button');
const display = document.querySelector('#display');

btns.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.currentTarget.id
        if (value === 'clear') {
            firstNum = 0;
            secondNum = 0;
            operation = null;
            display.textContent = '';
            return;
        }
        if (value === '=') {
            if (firstNum !== 0 && secondNum !== 0 && operation !== null) {
                const result = operate(firstNum, secondNum, operation);
                firstNum = result;
                secondNum = 0;
                operation = null;
                isTypingState = false;
                display.textContent = firstNum;
            }
            return;
        }

        const num = Number(value)
        if (Number.isNaN(num)){
            if(operation === null) {
            operation = value;
            console.log(operation);
            display.textContent = operation;
            }
            else if (isTypingState === true ) {
                operation = value;
                display.textContent = operation;
                isTypingState = false;
            }
            else {
                const result = operate(firstNum, secondNum, operation);
                firstNum = result;
                secondNum = 0;
                operation = value;
                isTypingState = false;
                display.textContent = firstNum;
            }
            return;
        }

        //multi digit
        if (operation === null) {
            firstNum = firstNum * 10 + num;
            display.textContent = firstNum;
        }
        else {
            if (!isTypingState) {
                secondNum = num;
                isTypingState = true;
            }
            else {
                secondNum = secondNum * 10 + num;
            }
            display.textContent = secondNum;    
        }

    });
});

function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(firstNum, secondNum, operation) {
    let ans;
    switch (operation) {
        case '+':
            ans = sum(firstNum, secondNum);
            break;
        case '-':
            ans = subtract(firstNum, secondNum);
            break;
        case '*':
            ans =  multiply(firstNum, secondNum);
            break;
        case '/':
            ans =  divide(firstNum, secondNum);
            break;
    }
    // display.textContent = ans;
    return ans;
}
// to implement: chain operations
// mind map : double operators fix (5 ++3) --> result variable