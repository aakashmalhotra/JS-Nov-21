// function decideTheDrink() {
//     console.log("function called");
//     return false;
// }

function decideTheDrink(event) {
    event.preventDefault();
    // console.log("function called");

    const textBoxEl = document.getElementById('age');
    const age = textBoxEl.value;
    // console.log(age);
    const resultDivEl = document.getElementById("result");

    // Validation
    if (age <= 12) {
        resultDivEl.textContent = "You cannot enter";
        resultDivEl.style.color = "red";
    }
    else if (age < 18) {
        // Manipulate the content
        resultDivEl.textContent = "You can only have water";
        resultDivEl.style.color = "blue";
    }
    else {
        resultDivEl.textContent = "You can have beer";
        resultDivEl.style.color = "blue";
    }

    // Manipulate CSS
    resultDivEl.style.fontSize = "16px";
    resultDivEl.style.padding = "12px";
}