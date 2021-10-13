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


    if (age < 18) {
        resultDivEl.textContent = "You can only have water";
    }
    else {
        resultDivEl.textContent = "You can have beer";
    }
}