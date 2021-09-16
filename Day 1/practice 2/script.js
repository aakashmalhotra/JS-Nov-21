function sampleFunction() {
    // // Show the message to developer in the console
    // console.log("function called");
    // // Show the message to user
    // alert("Heeeyyyyy!!!!");

    // Defining 2 variables
    let number1 = 10; // data type: number
    let number2 = 15;  //data type: number

    let nameOfCutomer = "Tom"; // data type: string

    let sum = 0;
    sum = number1 + number2;

    //  alert("nameOfCutomer has to pay sum dollars");
    // alert(nameOfCutomer);

    // line 20 and 22 will produce the same result
    // alert(nameOfCutomer + " has to pay " + sum + " dollars");

    alert(`${nameOfCutomer}  has to pay ${sum} dollars`);
}