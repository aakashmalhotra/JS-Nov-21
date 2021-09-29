function sampleFunction() {
    let age = 25;
    let drivingExperience = 3;

    if (age > 25 && drivingExperience >= 5) {
        console.log("You can rent a ferrari");
    }
    else if (age > 25 && drivingExperience < 5) {
        console.log("You can rent a Audi Q5");
    }
    else {
        console.log("You can rent a mazda 3");
    }
}

// Write a program to find the best toy for a dog:
// If the dog weighs more than or equal to 60 kg and likes to chew suggest "ultra chew - $10"
// If the dog weighs more than or equal to 60 kg and doesn't like to chew suggest "super chew - $7"
// If the dog weighs less than 60 kg and likes to chew suggest "super chew - $7"
// If the dog weighs less than 60 kg and doesn't like to chew suggest "light chew - $3"


function dogToySuggester() {
    let dogWeight = 65;
    let likesToChew = true;

    if (dogWeight >= 60 && likesToChew) {
        //  if (dogWeight >= 60 && likesToChew == true)
        //  if (65 >= 60 && true == true)
        //  if (true && true)
        // if(true)

        // Option 2
        // if (dogWeight >= 60 && likesToChew)
        // if (65 >= 60 && true)
        // if (true && true)
        // if(true)

        console.log("ultra chew - $10");
    }

    else if (dogWeight >= 60 && !likesToChew) {
        console.log("super chew - $7");
    }
    else if (dogWeight < 60 && likesToChew) {
        console.log("super chew - $7");
    }
    else if (dogWeight < 60 && !likesToChew) {
        console.log("light chew - $3");
    }
    else {
        console.log("Do you even wanna buy anything?")
    }
}