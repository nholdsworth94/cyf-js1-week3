/**
 * INSTRUCTIONS
 * ============
 * 
 * Create a function that takes a birthYear, and returns the age of someone
 * 
 * You are given an array with year that 7 people were born, [1964, 2008, 1999, 2005, 1978, 1985, 1919]. 
 * 
 * Take this array and create another array containing their ages.
 * 
 * console.log the birth years array
 */

/**
 * POSSIBLE SOLUTION
 * =================
 * 
 * so we need to create a function
 * 
 * it is going to take a parameter that we can deduce will be a number
 * 
 * our output / return type is going to also be a number
 * 
 * we then need to use this function in order to create a new array, and then console.log the ages
 * 
 * so what I plan to do is use this function we create in the log statement
 * 
 * this way we can show the before and after
 * 
 * I'll then use the .forEach() function to log each age out
 */

// first I need to declare my array of birth years
let birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

// secondly I will create my function, appropriately named, with a parameter for birth year
function getAge(birthYear) {

    // we could technically hard code the year 2021, but this isn't future proof
    // by getting the year from the Date class, I can know for sure I am getting the correct one
    // I can then subtract the birth year from this to get the age
    return age = new Date().getFullYear() - birthYear;
}

// I can now iterate through each element in our array, and log out a message
// remember - .forEach() will NOT return an array, it is used for side effects
birthYears.forEach(year => console.log(`Born in ${year}, ${getAge(year)} years old`));

/**
 * EXERCISE 2
 * ==========
 *
 * You can drive in the UK at the age of 17.
 *
 * Write another function that takes a birth year and returns a string Born in {year} can drive or Born in {year} can drive in {x} years
 *
 * Use the array of birth years, [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ], to get an array of strings saying if these people can drive
 *
 * console.log the answers
 */

/**
 * POSSIBLE SOLUTION
 * =================
 * 
 * so again, we need to create a function
 * 
 * this time it is going to return a string that will differ depending on the input value
 * 
 * I will again use the .forEach() function to log out the result of the function for each element in our array
 */

// so lets begin with creating our function named appropriately
// we're expecting an input of a birth year which is a number
function canDrive(birthYear) {

    // first lets get the age of our driver, we can then do something with the result
    // lets use the function we created earlier
    const age = getAge(birthYear);

    // because the start of the string is the same, we could define that first
    let str = `Born in ${birthYear}`;

    // now we need to test the age to know which string to return
    if (age >= 17) {
        // if the person is 17 or over, they can drive
        // lets update the string we want to return
        str = `${str}, can drive`;
    } else {
        // if the person is under 17, they cannot drive
        // lets update the string we want to return
        // we need to also calculate the amount of years the person needs to wait to be able to drive
        // we don't need to use this value elsewhere, so we don't need to bother assigning it to a variable
        str = `${str}, can drive in ${17 - age} years`;
    }

    // now we have finished building our string, lets return it
    return str;
}

// now we need to test our function using our .forEach() and console.log()
birthYears.forEach(year => console.log(canDrive(year)));