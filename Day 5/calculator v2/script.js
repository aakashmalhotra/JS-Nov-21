function fetchNumberFromTextBox(id) {
    const numEl = document.getElementById(id);
    const num = parseInt(numEl.value);
    return num;
}

function printInResultDiv(resultString) {
    const resultEl = document.getElementById("result");
    resultEl.textContent = resultString;
}


function add(event) {
    event.preventDefault();
    const num1 = fetchNumberFromTextBox("num1");
    const num2 = fetchNumberFromTextBox("num2");
    printInResultDiv(`${num1} + ${num2} = ${num1 + num2}`);
}

function sub(event) {
    event.preventDefault();
    const num1 = fetchNumberFromTextBox("num1");
    const num2 = fetchNumberFromTextBox("num2");
    printInResultDiv(`${num1} - ${num2} = ${num1 - num2}`);
}

function divide(event) {
    event.preventDefault();
    const num1 = fetchNumberFromTextBox("num1");
    const num2 = fetchNumberFromTextBox("num2");
    printInResultDiv(`${num1} / ${num2} = ${num1 / num2}`);
}
function multiply(event) {
    event.preventDefault();
    const num1 = fetchNumberFromTextBox("num1");
    const num2 = fetchNumberFromTextBox("num2");
    printInResultDiv(`${num1} * ${num2} = ${num1 * num2}`);
}


