const clock = {
    color: "orange",
    time: "8:00 PM",
    brand: "Rolex",
    background: "green",
    activateDarkMode: function () {
        this.color = "floralwhite";
        this.background = "dimgrey";
        updateColor();
    },
    activateLightMode: function () {
        this.color = "dimgrey";
        this.background = "floralwhite";
        updateColor();
    }
}

function displayproperties() {
    // const resultEl = document.getElementById("result");
    const resultEl = $("#result")[0];
    // $("button") // tag name
    // $(".class-name") // class name
    // $("#id") // id name

    resultEl.innerHTML = `
        Color of the clock: ${clock.color} <br>
        Time right now: ${clock.time} <br>
        Brand: ${clock.brand.toUpperCase()}
    `
}

function updateTime() {
    const watchTimeEl = document.getElementById("watch-time");
    watchTimeEl.innerHTML = clock.time;
}

function updateColor() {
    const watchTimeEl = document.getElementById("watch-time");
    watchTimeEl.style.color = clock.color;
    watchTimeEl.style.backgroundColor = clock.background;
}