function setup() {
    console.log("Setup function called");

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', handleOnClickEvent);

}


function handleOnClickEvent() {
    console.log("function called");
}