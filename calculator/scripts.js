let firstNum = 0;
let operation = null;
let secondNum = 0;
let currentState2 = [];
let currentState1 = [];

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

        //array approach
        if (operation !== null) {
            currentState2.push(Number(value));
            let n = currentState2.length
            for (let i = n-1; i >= 0; i--){
                secondNum += currentState2[i] * Math.pow(10, i);
            }
            display.textContent = secondNum;
        }
        else {
            currentState1.push(Number(value));
            let n = currentState1.length
            for (let i = n-1; i >= 0; i--){
                firstNum += currentState1[i] * Math.pow(10, i);
            }     
            display.textContent = firstNum;     
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





