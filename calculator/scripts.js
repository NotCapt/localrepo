let firstNum = null;
let operation = null;
let secondNum = null;

const btns = document.querySelectorAll('button');

btns.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = Number(event.target.id)
        if (Number.isNaN(value)){
            return;
        }
        firstNum = value;
        console.log(firstNum);
    })
})



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


