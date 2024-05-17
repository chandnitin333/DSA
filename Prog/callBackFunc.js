function greet(name, myfunc) {
    console.log('Hi' + ' ' + name);
    myfunc();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);