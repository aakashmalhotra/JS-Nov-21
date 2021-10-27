const clock = {
    color: "black",
    time: "8:00 PM",
    brand: "Rolex",
}

function displayproperties() {
    const resultEl = document.getElementById("result");

    resultEl.innerHTML = `
        Color of the clock: ${clock.color}
    `

}