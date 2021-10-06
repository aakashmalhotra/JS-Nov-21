function sampleFunction() {
    console.log("function called");
    sayHello("John"); // function call
    sayHello("Jane");
    sayHello("Spiderman");
    console.log("say hello has been called. This is the end of the program");
}

// Defining a function
function sayHello(name) {
    delimeterPrinter('#');
    console.log(`**** Hi! ${name} ****`);
    delimeterPrinter('*');
}

function delimeterPrinter() {
    console.log("------------------------------");
}

// Change function delimeterPrinter so that it takes a symbol that would be printer as a delimter 20 times.