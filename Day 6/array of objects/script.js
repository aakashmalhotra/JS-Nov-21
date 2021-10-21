const cakeList = [];

function addCake(event) {
    event.preventDefault();

    const nameEl = document.getElementById("name");
    const name = nameEl.value;
    nameEl.value = "";

    const caloriesEl = document.getElementById("calories");
    const calories = caloriesEl.value;
    caloriesEl.value = "";

    const priceEl = document.getElementById("price");
    const price = priceEl.value;
    priceEl.value = "";

    const icingColorEl = document.getElementById("icing-color");
    const icingColor = icingColorEl.value;
    icingColorEl.value = "";

    const cake = {
        name: name,
        calories: calories,
        price: price,
        icingColor: icingColor
    }

    // console.log(cake);
    cakeList.push(cake);

    // replaces above 2 lines
    // cakeList.push({
    //     name: name,
    //     calories: calories,
    //     price: price,
    //     icingColor: icingColor
    // })

    console.log(cakeList);


    printToPage();
}

function printToPage() {
    const resultEl = document.getElementById("result");

    resultHtml = "";

    for (let i = 0; i < cakeList.length; i++) {
        resultHtml += `<div class="result-cake">
        Name: ${cakeList[i].name} <br>
        Calories: ${cakeList[i].calories} <br>
        Price: ${cakeList[i].price} <br>
        Icing Color: ${cakeList[i].icingColor} <br>
        </div>`
    }

    resultEl.innerHTML = resultHtml;

}