function sampleFunction() {
    console.log("function called");
    sayHello("John"); // function call
    sayHello("Jane");
    sayHello("Spiderman");
    console.log("say hello has been called. This is the end of the program");
}

// Defining a function
function sayHello(name) {
    delimeterPrinter();
    console.log(`**** Hi! ${name} ****`);
    delimeterPrinter();
}

function delimeterPrinter() {
    console.log(`********`);
}


// function delimeterPrinter(delimeter) {
//     let fullLine = '';
//     for (let hakunaMatata = 1; hakunaMatata <= 20; hakunaMatata++) {
//         fullLine = fullLine + delimeter;
//     }
//     console.log(fullLine);
// }

// Change function delimeterPrinter so that it takes a symbol that would be printer as a delimter 20 times.


// Print Multiple of 7 from 1 to 10 using loops
// 7 * 1 = 7
// 7 * 2 = 14