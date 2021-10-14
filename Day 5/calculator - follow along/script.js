function add(event) {
    event.preventDefault();
    console.log("add function called");

    const num1El = document.getElementById("num1");
    const num1String = num1El.value;
    const num1 = parseInt(num1String);
    console.log(num1);

    const num2El = document.getElementById("num2");
    const num2String = num2El.value;
    const num2 = parseInt(num2String);
    console.log(num2);

    const addition = num1 + num2;
    console.log(addition);

    const resultEl = document.getElementById("result");
    resultEl.textContent = addition;

}