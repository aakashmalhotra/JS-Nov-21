// Maintain the list of fruits
const listFruits = [];

function addFruit(event) {

    event.preventDefault();

    // Access the value in the text box

    // get access of the text box
    const fruitNameEl = document.getElementById("fruit-name");

    // get value from the text box
    const fruitName = fruitNameEl.value.toLowerCase();

    // Empty the text box after fetching the value from text box
    fruitNameEl.value = "";

    console.log("New fruit name fetched from text box")
    console.log(fruitName);


    // Store the fruit name in listFruits
    // push method of arrays
    listFruits.push(fruitName);

    console.log("New array after pushing the fruit name");
    console.log(listFruits);

    printFruitsonScreen();
}

function printFruitsonScreen() {
    const resultEl = document.getElementById("result");

    listFruits.sort();
    let resultHtml = "";

    // listFruits.forEach(function (fruit) {
    //     resultHtml += `<li> ${fruit} </li>`
    // })

    for (let i = 0; i < listFruits.length; i++) {
        // resultHtml = resultHtml + `<li> ${listFruits[i]} </li>`
        resultHtml += `<li> ${listFruits[i]} </li>`
    }

    resultEl.innerHTML = resultHtml;
}