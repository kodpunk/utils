/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 @param {string} str - the string to be converted to title case
    @returns {string} - returns the string in title case
    @example
    const inputString = "hello world";
    const titleCaseString = toTitleCase(inputString);
    console.log(titleCaseString); // Outputs: "Hello World"

 */
const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

// Example
const inputString = "hello world";
const titleCaseString = toTitleCase(inputString);
console.log(titleCaseString); // Outputs: "Hello World"
