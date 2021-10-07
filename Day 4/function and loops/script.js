function multiplierFunctionHandler() {
    multipleDisplayer(5);
    multipleDisplayer(7);
}

function multipleDisplayer(multipleOf) {
    let rowNumber;

    for (rowNumber = 1; rowNumber <= 10; rowNumber++) {
        let multiplicationAnswer = rowNumber * multipleOf;
        console.log(`${multipleOf} * ${rowNumber} = ${multiplicationAnswer}`);
    }

}

// Send to me in private message for feedback

// Program 1:
// Create a function named drinkDecider which takes 1 argument age and if the user is less than 18 years old it displays
// "You can have only water or soda"
// If the user is 18 years or older it displays
// "You can drink water, soda or beer"

// Program 2:
// Create a function named comparer which takes 2 arguments num1 and num2. Display which number is greater using this function.

// Program 3:
// Write a function named nameReplicator which takes 1 argument replicationfactor which would receive a number.
// The word "John" should be printed as many times as replicationfactor.

// Program 4:
// Create a function multipleDisplayer that takes 2 arguments multipleOf and numberOfTimes. Use this function to display the multiples of a number.
// multipleOf would be used to decide multiples of which number would be produced.
// numberOfTimes would be used to decide how many multiples would be displayed.