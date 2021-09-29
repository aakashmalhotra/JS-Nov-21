
function sampleFunction() {
    let dogWeight = 65;
    let likesToChew = true;

    if (dogWeight >= 60 && likesToChew) {
        console.log("ultra chew - $10");
    }
    else if ((dogWeight >= 60 && !likesToChew) || (dogWeight < 60 && likesToChew)) {
        console.log("super chew - $7");
    }
    else if (dogWeight < 60 && !likesToChew) {
        console.log("light chew - $3");
    }
    else {
        console.log("Do you even wanna buy anything?")
    }
}

// you can rent a ferrari if any one of the following is true:
// - you are more than 25 years old 
// - you are a student of concordia university
// - you have a million dollars
// - you want to rent a ferrari desperately
// - you have driving experience of more than 10 years

// ==========================================================================
// let age = 50;
// let name = "robinhood";
// let isNice = true;
// let isprogrammer = false;

// Evaluate the result of statements below with the above values:
// 1. (age < 25 && name =="robinhood" || isNice)
// 2. (age < 25 && (name =="robinhood" || isNice))
// 3. (isprogrammer || isNice)

