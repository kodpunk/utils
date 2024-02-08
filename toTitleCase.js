const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

// Example
const inputString = "hello world";
const titleCaseString = toTitleCase(inputString);
console.log(titleCaseString); // Outputs: "Hello World"
