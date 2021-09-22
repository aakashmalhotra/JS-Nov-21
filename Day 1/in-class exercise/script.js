

function sampleFunction() {
    let numberOfFriends = 3;
    let bill = 200;
    let billWithTip = bill * 1.15;

    let share = bill / numberOfFriends;
    let shareWithTip = billWithTip / numberOfFriends;

    //Both produce the same result 
    console.log("The bill of each person is " + share);
    console.log(`The bill of each person is ${share}`);

    console.log(`The bill of each person with tip is ${shareWithTip}`);
}

function sampleFunction2() {
    let numberOfFriends = 3;
    let bill = 200;

    console.log("The bill of each person is " + bill / numberOfFriends);
    console.log(`The bill of each person is ${bill / numberOfFriends}`);
}