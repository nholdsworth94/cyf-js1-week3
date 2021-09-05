/**
 * INSTRUCTIONS
 * ============
 * 
 * You are given an array with year that 7 people were born, [1964, 2008, 1999, 2005, 1978, 1985, 1919]. 
 * 
 * Filter this array to only those who can drive
 * 
 * Use console.log to print the message These are the birth years of people who can drive: <filtered birth years>
 * 
 */

/**
 * POSSIBLE SOLUTION
 * =================
 * 
 * so what I plan to do here is create ourselves a callback function
 * 
 * this will test whether or not a person can or cannot drive - I will use .filter() for this
 * 
 * to test, we can console.log out the array of people who can drive
 */

// so lets start by declaring our array
let birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

// lets create ourselves a function that gets a person's age based on their birthYear
function getAge(birthYear) {

    // description in for-each-exercise.js
    return age = new Date().getFullYear() - birthYear;
}

// lets create ourselves a function that will test whether or not a person can drive based on their birth year
function canDrive(birthYear) {

    // as we're going to be using this for filter, remember this needs to return a boolean (true/false) value
    return getAge(birthYear) >= 17;
}

// lets then create a variable and assign it the filtered list of people who can drive
let driverBirthYears = birthYears.filter(year => canDrive(year));

// we can now console.log() our message
console.log(`These are the birth years of people who can drive ${driverBirthYears}`);