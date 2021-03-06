// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// - Create a function called divisbleBy3
// - Function needs a parameter of a number
// - Modolo operator
// - Is divisble by three or not, string interpolation


// a) Create a test with expect statements for each of the variables provided.

describe("divisbleBy3", () => {
  test("whether a number is divisble by three or not", () => {
    var num1 = 15
    expect(divisbleBy3(num1)).toEqual("15 is divisible by three")
    // Expected output: "15 is divisible by three"
    var num2 = 0
    expect(divisbleBy3(num2)).toEqual("0 is divisible by three")
    // Expected output: "0 is divisible by three"
    var num3 = -7
    // Expected output: "-7 is not divisble by three"
    expect(divisbleBy3(num3)).toEqual("-7 is not divisible by three")
    expect(divisbleBy3(45)).toEqual("45 is divisible by three")
    expect(divisbleBy3(4)).toEqual("4 is not divisible by three")
    expect(divisbleBy3(9)).toEqual("9 is divisible by three")
  })
})


// b) Create the function that makes the test pass.


// const divisbleBy3 = (number) => {
//   if(number % 3 === 0) {
//     return `${number} is divisible by three`
//   } else {
//     return `${number} is not divisible by three`
//   }
// }

// Ternary operator - if/else decision
// decision ? outcome if true : outcome if false
const divisbleBy3 = (number) => {
  return number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three`
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// - Create a function called caplitalizeFirstLetter
// - Parameter array
// - Iterate with .map()
// - Capitalize first letter
// - Zero index using charAt of the word .toUpperCase()
// - Account for the rest of the word concatenation, slice
// - Output array of capitalized words


// a) Create a test with expect statements for each of the variables provided.

describe("capitalizeFirstLetter", () => {
  test("take in an array of words and returns an array with all the words capitalized", () => {
    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    expect(capitalizeFirstLetter(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    expect(capitalizeFirstLetter(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})


// b) Create the function that makes the test pass.

const capitalizeFirstLetter = (array) => {
  return array.map(value => {
    return `${value[0].toUpperCase()}${value.slice(1)}`
  })
}



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// - create a function called firstVowel
// - paramenter of string
// - iterate through the string
// - check for vowels using ||
// - return the i of the first vowel


// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  test("takes in a string and logs the index of the first vowel", () => {
    var vowelTester1 = "learn"
    // Expected output: 1
    expect(firstVowel(vowelTester1)).toEqual(1)
    var vowelTester2 = "academy"
    // Expected output: 0
    expect(firstVowel(vowelTester2)).toEqual(0)
    var vowelTester3 = "challenge"
    // Expected output: 2
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})


// b) Create the function that makes the test pass.
// && - logical and
// || - logical or

// const firstVowel = (string) => {
//   for(let i=0; i<string.length; i++){
//     if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
//       return i
//     }
//   }
// }

// Other options:
// .search
// .includes
// .filter

const firstVowel = (string) => {
  let vowelsArray = string.split("").filter(value => {
    return value === "a" || value === "e" || value === "i" || value === "o" || value === "u"
  })
  // [e, a]
  // [a, a, e]
  // [a]
  return string.indexOf(vowelsArray[0])
  "challenge".indexOf('a')
}
