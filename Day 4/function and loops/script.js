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
function drinkDecider(age) {
    if (age >= 18) {
        console.log("You can drink water, soda or beer");
    }
    else {
        console.log("You can have only water or soda");
    }
}

// Program 2:
// Create a function named comparer which takes 2 arguments num1 and num2. Display which number is greater using this function.
// If both are equal display "Both numbers are equal"
function comparer(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater`)
    }
    else if (num2 > num1) {
        console.log(`${num2} is greater`)
    }
    else {
        console.log("Both are equal");
    }
}


// Program 3:
// Write a function named nameReplicator which takes 1 argument replicationfactor which would receive a number.
// The word "John" should be printed as many times as replicationfactor.

function nameReplicator(replicationfactor) {
    for (let iterator = 1; iterator <= replicationfactor; iterator++) {
        console.log("John");
    }
}

// Program 4:
// Create a function advancedMultipleDisplayer that takes 2 arguments multipleOf and numberOfTimes. Use this function to display the multiples of a number.
// multipleOf would be used to decide multiples of which number would be produced.
// numberOfTimes would be used to decide how many multiples would be displayed.

// Sample outputs:

// Sample 1
// multipleDisplayer(5,3);

// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15

// Sample 2
// multipleDisplayer(3,5);

// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12
// 3 * 5 = 15

// Sample 2
// multipleDisplayer(6,10);

// 6 * 1 = 6
// 6 * 2 = 12
// 6 * 3 = 18
// 6 * 4 = 24
// 6 * 5 = 30
// 6 * 6 = 36
// 6 * 7 = 42
// 6 * 8 = 48
// 6 * 9 = 54
// 6 * 10 = 60

function advancedMultipleDisplayer(multipleOf, numberOfTimes) {
    let i;

    for (i = 1; i <= numberOfTimes; i++) {
        let multiplicationAnswer = rowNumber * multipleOf;
        console.log(`${multipleOf} * ${rowNumber} = ${multiplicationAnswer}`);
    }
}

// test test
//  test