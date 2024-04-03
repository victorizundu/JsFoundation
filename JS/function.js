//declarng function
function add(a,b) {
    let result = a+b;
    return result;
}

//call the function

console.log(56,78)

//sub funtion

function substration(e,f) {
    let result = e - f;
    return result;
}

//call sub
console.log(14,18)

//multiplication function
function multiplication(g,h,m) {
    let result = g*h*m;
    return result;
}
// call multiplication
console.log(12,15,18)

//using string predefined
let message = "User Login Succesful";
console.log(message.toUpperCase());

//using number predefined function
let age = 23;
console.log(typeof age);
let ageString = age.toString();
console.log(typeof ageString, ageString);

//use array predefined function
let arr = ["zero", "one", "three"];
arr.push("four");
console.log(arr);

//object predefined functions
let obj = {
    one: 1,
    two: 2,
    three: 3,
};
/**
 * an object does not have specific predefine
 * functions
 */

/**
 * types of modal
 * alert - ;shows the user an out put
 * and uless its attended to
 * the website flow is paused
 * 
 * confirm - used to inquire from the user taking
 * reply as to if its true or false
 * 
 * prompt = used for asking the user a
 * question and taking the anser as input
 */

//scope
/**
 * data is inherited from parent
 * And can be overwriten on the 
 * functional scope
 * while parent cant see data defined in 
 * the children scope
 */
function globalScope() {
    const global = "Global";
    let data = "global scope data";
    let student = [];

    function functionone() {
        const scopeOne = "ScopeTwo";
        //let data = "function one data";
        console.log(data);
    }
    functionone();
    function functionTwo() {
        const scopeTwo = "Scopetwo";
    }
    functionTwo();
}
globalScope();