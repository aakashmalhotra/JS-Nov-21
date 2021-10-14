
function add(event) {
    event.preventDefault();
    const num1El = document.getElementById("num1");
    const num1 = parseInt(num1El.value);

    const num2El = document.getElementById("num2");
    const num2 = parseInt(num2El.value);


    const resultEl = document.getElementById("result");
    resultEl.textContent = `${num1} + ${num2} = ${num1 + num2}`
}

// function sub(event) {
//     event.preventDefault();
//     const num1El = document.getElementById("num1");
//     const num1 = parseInt(num1El.value);

//     const num2El = document.getElementById("num2");
//     const num2 = parseInt(num2El.value);

//     const resultEl = document.getElementById("result");
//     resultEl.textContent = `${num1} - ${num2} = ${num1 - num2}`
// }

// function divide(event) {
//     event.preventDefault();
//     const num1El = document.getElementById("num1");
//     const num1 = parseInt(num1El.value);

//     const num2El = document.getElementById("num2");
//     const num2 = parseInt(num2El.value);

//     const resultEl = document.getElementById("result");
//     resultEl.textContent = `${num1} / ${num2} = ${num1 / num2}`
// }
// function multiply(event) {
//     event.preventDefault();
//     const num1El = document.getElementById("num1");
//     const num1 = parseInt(num1El.value);

//     const num2El = document.getElementById("num2");
//     const num2 = parseInt(num2El.value);

//     const resultEl = document.getElementById("result");
//     resultEl.textContent = `${num1} * ${num2} = ${num1 * num2}`
// }


