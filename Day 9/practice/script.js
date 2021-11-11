let myClothingList = [];

function listOfClothes(event) {
    event.preventDefault();
    console.log("Function getting called");

    const clothingName = $("#name-clothe").val();
    const clothingType = $("#type-clothe").val();
    const clothingCost = $("#cost-clothe").val();

    // 2. Create the object
    const item = {
        name: clothingName,
        type: clothingType,
        cost: clothingCost,
    }

    // 3. Self-testing - does it log an item containing expected keys and values?
    console.log(item);

    $("#name-clothe").val("");
    $("#type-clothe").val("");
    $("#cost-clothe").val("");

    myClothingList.push(item);

    printAllItems();

}

function printAllItems() {
    const resultEl = document.getElementById("result");

    let resultHtml = "";

    for (let i = 0; i < myClothingList.length; i++) {
        resultHtml = resultHtml + `<li> Name: ${myClothingList[i].name} / Cost: ${myClothingList[i].cost} / Type: ${myClothingList[i].type}</li>`;

    }

    resultEl.innerHTML = resultHtml;
}