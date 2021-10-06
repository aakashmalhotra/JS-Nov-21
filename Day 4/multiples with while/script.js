function sampleFunction() {
    let rowNumber = 1; // initialisation

    while (rowNumber <= 10) { // condition
        let multiple = 5 * rowNumber;
        console.log(`5 * ${rowNumber} = ${multiple}`);
        // console.log(`5 * ${rowNumber} = ${5 * rowNumber}`);
        rowNumber = rowNumber + 1; //Increament
    }
}


// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20