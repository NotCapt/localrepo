let firstNum = null;
let operation = null;
let secondNum = null;

const btns = document.querySelectorAll('button');
const display = document.querySelector('#display');

btns.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.currentTarget.id
        if (value === 'clear') {
            firstNum = null;
            secondNum = null;
            operation = null;
            display.textContent = '';
            return;
        }
        if (value === '=') {
            if (firstNum !== null && secondNum !== null && operation !== null) {
                const result = operate(firstNum, secondNum, operation);
                firstNum = result;
                secondNum = null;
                operation = null;
            }
            return;
        }

        const num = Number(value)
        if (Number.isNaN(num)){
            operation = value;
            console.log(operation);
            display.textContent = operation;
            return;
        }
        if (operation === null) {
        firstNum = Number(value);
        display.textContent = firstNum;
        console.log(`first num: ${firstNum}`);
        }
        else {
            secondNum = Number(value);
            display.textContent = secondNum;
            console.log(`second num: ${secondNum}`);
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
    display.textContent = ans;
    return ans;
}





