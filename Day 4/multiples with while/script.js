function sampleFunction() {
    let rowNumber = 1; // initialisation

    do {
        console.log(`5 * ${rowNumber} = ${5 * rowNumber}`);
        // rowNumber = rowNumber + 1;
        // rowNumber += 1;
        rowNumber++;
    }
    while (rowNumber <= 10);
}


// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20