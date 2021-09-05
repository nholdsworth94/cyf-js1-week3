let names = ['nick', 'Tony', 'Daniel ', ' patrick', 'suraj ', '  smeea', 'Kabeer'];

function trimAndLower(name) {

    return name.trim().toLowerCase();
}

let trimAndLowerNames = names.map(trimAndLower);

let trim = names.map(function (name, index) {
    return name.trim().toLowerCase();
})

let trim = names.map(name => name.trim().toLowerCase());

let trim = names.map(name => {
    console.log(name);
    return name.trim().toLowerCase();
});

let trim = names.map((name, index) => {
    console.log(index);
    return name.trim().toLowerCase();
});

console.log(names);
console.log(trim);

EXERCISE 1 - MAP
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

function upper(names) {
    return names.map(name => name.toUpperCase());
}

console.log(abracaFunction(upper))

let nums = [1, 2, 3, 4, 5, 6, 7];

let doubledNums = nums.map(x => x * 2);

console.log(nums);
console.log(doubledNums);

PURE FUNCTION
function multiply(a, b) {
    return a * b;
}

IMPURE FUNCTION
let c = 2;
function multiply2(a, b) {
    c = 3;
    console.log("");
    a * b * c;
}

.forEach()
let nums = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < nums.length; i++) {
    // logic
    console.log(nums[i])
}

function log(x, i) {
    // console.log(`Index: ${i}, Element: ${x}`);
    console.log(x);
}

nums.forEach(x => console.log(x));
nums.forEach((x, i) => console.log(`Index: ${i}, Element: ${x}`));
nums.forEach(log);

EXERCISE.forEach()
function getAge(birthYear) {
    // return age = new Date().getFullYear() - birthYear;
    return 2021 - birthYear;
}

let birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

// console.log(birthYears.map(getAge));
// console.log(birthYears.map(x => `Born in ${x}, current age ${getAge(x)}`));

birthYears.forEach(x => {
    console.log(`Born in ${x}, current age ${getAge(x)}`);
})

function canDrive(birthYear) {
    let age = getAge(birthYear);
    if (age >= 17) {
        return `Born in ${birthYear}, can drive`;
    }
    else {
        return `Born in ${birthYear}, can drive in ${17 - age} years`;
    }
}

let canDriveArr = birthYears.map(canDrive); // string[]
canDriveArr.forEach(x => console.log(x));

.filter()

let scores = [67, 3, 5, 35, 80, 12, 97, 79, 45, 88, 81, 80];

function isHighScore(score) {
    return score >= 80;
}

let highScores = scores.filter(isHighScore);
let highScores = scores.filter(function (score) {
    return score > 80;
});
let highScores = scores.filter(score => score >= 80);

console.log(highScores);

EXERCISE - .filter()

let birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function getAge(birthYear) {
    // return age = new Date().getFullYear() - birthYear;
    return 2021 - birthYear;
}

function canDrive(birthYears) {

    return birthYears.filter(birthYear => getAge(birthYear) >= 17);
}

console.log(`These are the birth years of people who can drive ${canDrive(birthYears)}`);
console.log(`These are the birth years of people who can drive ${birthYears.filter(birthYear => getAge(birthYear) >= 17)}`);

.find()

const names = ['nick', 'timur', 'roman', 'kevin', 'tenzin', 'pezhman'];

function isLongName(name) {
    return name.length > 4;
}

let firstLongName = names.find(isLongName);
let fln = names.find(x => x.length > 8);

console.log(firstLongName);
console.log(fln);

let loooooooongNames = names.filter(x => x.length > 100);
console.log(loooooooongNames)

EXERCSIE.find()
function peekaboo(names) {

    let name = names.find(x => x === 'nick');

    if (name) {
        return `I see you: ${name}`;
    } else {
        return "No bueno";
    }
}

let names1 = ['nick', 'roman', 'john'];
let names2 = ['roman', 'john'];

console.log(peekaboo(names1));
console.log(peekaboo(names2));

Chaining

let names = ['nick', 'roman', 'john'];

function formatName(name) {
    // capitalise first letter of string / word
    return name.split("")[0].toUpperCase() + name.slice(1);
}

function log(name, index) {
    // log index and name
    console.log(index + ": " + name);
}

let formattedNames = names.map(formatName);
formattedNames.forEach(log);

chain
names.map(formatName).forEach(log); // will work
names.forEach(log).map(formatName); // will not work