function sameFunctionalityWithElseIf() {
    optionSelected = 1;

    console.log("Possible options\n1. Add \n2. Subt \n3. Multiply \n4. Divide");

    if (optionSelected == 1) {
        console.log(`The option you selected is 1`);
    }
    else if (optionSelected == 2) {
        console.log(`The option you selected is 2`);
    }
    else if (optionSelected == 3) {
        console.log(`The option you selected is 3`);
    }
    else if (optionSelected == 4) {
        console.log(`The option you selected is 4`);
    }
    else {
        console.log(`You don't know how to use a calculator?`);
    }
}


// Extend the functionality of the switch case.
// Build a calculator that has 2 variables(num1, num2) containing two numbers
// and another variable that contains one of the four operations Add, Subtract, multiply and divide.
// Depending on the optionSelected the respecting operation should be performed.
// For example: if optionSelected = 3, num1=5 and num2=10. Num1 and num2 should be multiplied and result 50 should be displayed.

function sampleFunction() {
    let num1 = 20;
    let num2 = 10;
    optionSelected = 3;

    console.log("Possible options\n1. Add \n2. Subt \n3. Multiply \n4. Divide");

    switch (optionSelected) {
        case 1: {
            console.log(`The option you selected is 1`);
            break;
        }
        case 2: {
            console.log(`The option you selected is 2`);
            break;
        }
        case 3: {
            console.log(`The option you selected is 3`);
            break;
        }
        case 4: {
            console.log(`The option you selected is 4`);
            break;
        }
        default: {
            console.log(`You don't know how to use a calculator?`);
        }
    }
}