
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
