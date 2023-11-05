

// 1. Take user input.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// 2. Parse input as an array.

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");


// 3. Construct an Object that tracks the number of each flavor.

const flavorTracker = {}

// 4. Update the oject as new input comes in.



// 5. Organize logic into a function.

function trackFlavors() {

  for (let i = 0; i < stringArray.length; i++) {
    const index = stringArray[i]
    if (flavorTracker[index] === undefined) {
      flavorTracker[index] = 1
    } else {
      flavorTracker[index]++
    }
  } return flavorTracker
}
console.log("Current Orders: ")
console.table(trackFlavors())