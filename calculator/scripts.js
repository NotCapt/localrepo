let firstNum = 0;
let operation = null;
let secondNum = 0;


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

        //multi digit
        if (operation === null) {
            firstNum = firstNum * 10 + num;
            display.textContent = firstNum;
        }
        else {
            secondNum = secondNum * 10 + num;
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
    display.textContent = ans;
    return ans;
}
// to implement: chain operations
// mind map : double operators fix (5 ++3) --> result variable