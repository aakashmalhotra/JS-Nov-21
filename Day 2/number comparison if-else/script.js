function sampleFunction() {
    let num1 = 10;
    let num2 = 10;

    // if (num1 > num2) {
    //     console.log("hey num1 is greater");
    // }
    // else {
    //     console.log("hey num1 is not greater than num2");
    // }


    // -----------------------
    if (num1 > num2) {
        console.log("hey num1 is greater");
    }
    else {
        if (num2 > num1) {
            console.log("hey num2 is not greater than num1");
        }
        else {
            console.log("Both are equal");
        }
    }
}