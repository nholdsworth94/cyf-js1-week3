/**
 * INSTRUCTIONS
 * ============
 * 
 * I have a function defined below as:
 *
 *  function abracaFunction(yourFunc) {
 *      console.log("I am abracaFunction! Watch as I mutate an array of strings to your heart's content!");
 * 
 * 		const abracaArray = [
 * 			"James",
 * 			"Elamin",
 * 			"Ismael",
 * 			"Sanyia",
 * 			"Chris",
 * 			"Antigoni",
 * 		];
 * 
 * 		const abracaOutput = yourFunc(abracaArray);
 * 
 * 		return abracaOutput;
 * 	}
 * 
 *	This function does not need to be modified. Can you pass in a callback function which will mutate abracaArray such that it:
 * 
 *	Upper cases all letters in the array
 */

/**
 * POSSIBLE SOLUTION
 * =================
 * 
 * So the function does not need to be changed, so all of my new code should be outside of this
 * 
 * From reading the function, I can see that the "yourFunc" parameter of the "abracaFunction" is being invoked (called / run) on line 19
 */

function abracaFunction(yourFunc) {
	console.log(
		"I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
	);
	const abracaArray = [
		"James",
		"Elamin",
		"Ismael",
		"Sanyia",
		"Chris",
		"Antigoni",
	];

	const abracaOutput = yourFunc(abracaArray);

	return abracaOutput;
}

// I will start by creating a function. We know the function needs to change the text to upper case, so I will name it appropriately
// The function should take a parameter, and this will be an array
function upperCase(arr) {

	// this exercise focuses on map, so lets use the map function
	// the .map() function returns a new array, so we can simply return the output of the map
	// the operation is nice and simple, so I can call the map in one line using an arrow function
	return arr.map(item => item.toUpperCase());
}

// we can test the function by calling it and assigning it to a variable
// when I pass my "upperCase" function as a parameter to the abracaFunction notice how I don't put parentheses () afterwards. This is because I am passing a reference to the function
// by putting parentheses at the end, I would be invoking the function, and instead of passing the reference to the function, it would pass the evaluation
const output = abracaFunction(upperCase);

// we can then console.log the output to check our code works
console.log(output);

/**
 * EXTRA CREDIT EXERCISE
 * =====================
 *
 * Modify your callback function from the previous exercise so that it also:
 *
 * Sorts abracaArray in alphabetical order
 */

/**
 * POSSIBLE SOLUTION
 * =================
 *
 * So again, we don't want to update the existing function, but update our callback function
 *
 * we can use our function from before but extend it
 */

// as the functionality has changed, lets also update the function name
function upperCaseSort(arr) {

	// we can keep the existing functionality, and chain the method .sort()
	// remember - we are able to chain this, because .map() is returning us an array, that will then be passed, when chained, to the sort
	// the sort will then also return us an array that we can return to whatever calls this function
	return arr.map(item => item.toUpperCase()).sort();
}

// again, lets put this to a variable so we can test it
const output2 = abracaFunction(upperCaseSort);

// and again, lets log the output so we can check the console
console.log(output2);