new TypeIt("#my-element", {
    strings: "This is what will be typed!",
})
    .pause(2000)
    .type(" What are you waiting for ? Go do some cool stuff with this library")
    .break()
    .pause(1000)
    .type(" I can't believe you are still here")
    .break()
    .pause(2000)
    .type(" OMG! You won't leave. I am gonna leave. Bye!")
    .break()
    .pause(2000)
    .empty()
    .go();

function addDarkmodeWidget() {


    const darkmode = new Darkmode();
    darkmode.showWidget();
}
window.addEventListener('load', addDarkmodeWidget);