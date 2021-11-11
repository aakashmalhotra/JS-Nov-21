let clothingItems = [];

function listOfClothes(event) {
    event.preventDefault();
    console.log("Function getting called");

    // 1. Fetch values from the page/dom/document/html/form

    const clothingNameEl = document.getElementById("name-clothe");
    const clothingTypeEl = document.getElementById("type-clothe");
    const clothingCostEl = document.getElementById("cost-clothe");

    const clothingName = clothingNameEl.value;
    const clothingType = clothingTypeEl.value;
    const clothingCost = clothingCostEl.value;

    // 2. Create the object
    const item = {
        name: clothingName,
        type: clothingType,
        cost: clothingCost,
    }

    // 3. Self-testing - does it log an item containing expected keys and values?
    console.log(item);

    clothingNameEl.value = "";
    clothingTypeEl.value = "";
    clothingCostEl.value = "";


}