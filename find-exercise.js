/**
 * INSTRUCTIONS
 * ============
 * 
 * Create a function which:
 * 
 * Takes a name as a parameter
 * 
 * Looks to see if your name is in the array of names
 * 
 * If it is, return Found me!; if not, return Haven't found me :(
 */

/**
 * POSSIBLE SOLUTION
 * =================
 * 
 * so we need to create a function, with an input parameter
 * 
 * we need an array of names to test against
 * 
 * and then we need to test whether that name is in the list using .find()
 * 
 * we will then return a string based on whether or not that name exists
 */

// so we'll start by creating our function, appropriately named
function findMe(name) {

    // we can create our array
    let names = ['alan', 'boris', 'charlie', 'dave', 'ed', 'frank', 'gary'];

    // now lets see if our name is in the array
    // we'll be using the .find() function here
    // our callback function needs to return a boolean, and we want to see whether name is equal to the current element we're looking at
    // because we're comparing strings, we need to be conscious of the case sensitivity
    // for this, lets not care about the case
    let foundName = names.find(n => n.toLowerCase() === name.toLowerCase());

    // if the find has found the name, foundName will be a string
    // if it hasn't, foundName will be undefined
    // based on the outcome, we need to provide a different string
    // lets add an if statement to handle this
    if (foundName) { // remember - javascript will evaluate an "undefined" variable as false, so we can just write it like this
        return 'Found me!';
    } else {
        // notice here how I have used single quotes for my string, but I have an apostrophe in my text
        // I have used a backslash \ in order to "escape" that character, so javascript knows this IS NOT the end of my string
        return 'Haven\'t found me :(';
    }
}

// lets run this a few times to see if it works!
console.log(findMe('alan'));
console.log(findMe('nick'));
