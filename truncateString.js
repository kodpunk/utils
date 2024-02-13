/*
  Truncate a string to a certain number of characters, and add "..." to the end if the string is longer than the specified number of characters.
  Useful for displaying a preview of a longer piece of text.
    @param {string} text - the text to truncate
    @param {number} maxLength - the maximum length of the truncated text
    @returns {string} - returns the truncated text
    @example
    const longText = "This is a very long piece of text that needs to be truncated.";
    const truncatedText = truncateText(longText, 20);
    console.log(truncatedText); // Outputs: "This is a very lo..."
 */
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Example
const longText =
  "This is a very long piece of text that needs to be truncated.";
const truncatedText = truncateText(longText, 20);
console.log(truncatedText); // Outputs: "This is a very lo..."
