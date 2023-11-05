

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

const flavorTracker = {
  vanilla: 0,
  strawberry: 0,
  chocolate: 0,
  coffee: 0,
}

// 4. Update the oject as new input comes in.

const flavors = Object.keys(flavorTracker)

// 5. Organize logic into a function.

function trackFlavors() {

  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i] == flavors[0]) {
      flavorTracker["vanilla"]++
    } else if (stringArray[i] == flavors[1]) {
      flavorTracker["strawberry"]++
    } else if (stringArray[i] == flavors[2]) {
      flavorTracker['chocolate']++
    } else if (stringArray[i] == flavors[3]) {
      flavorTracker['coffee']++
    } else {
      return 'Enter a valid Froyo Order!'
    }
  } return flavorTracker
}
console.log("Current Orders: "+ JSON.stringify(trackFlavors()))