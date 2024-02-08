const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// Example
const longText =
  "This is a very long piece of text that needs to be truncated.";
const truncatedText = truncateText(longText, 20);
console.log(truncatedText); // Outputs: "This is a very lo..."
