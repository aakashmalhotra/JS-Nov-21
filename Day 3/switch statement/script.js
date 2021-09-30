function sameFunctionalityWithElseIf() {
    optionSelected = 1;

    console.log("Possible options\n1. Add \n2. Subt \n3. Multiply \n4. Divide");

    if (optionSelected == 1) {
        console.log(`The option you selected is ${optionSelected}`);
    }
    else if (optionSelected == 2) {
        console.log(`The option you selected is ${optionSelected}`);
    }
    else if (optionSelected == 3) {
        console.log(`The option you selected is ${optionSelected}`);
    }
    else if (optionSelected == 4) {
        console.log(`The option you selected is ${optionSelected}`);
    }
    else {
        console.log(`You don't know how to use a calculator?`);
    }
}

function sampleFunction() {
    optionSelected = 2;

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