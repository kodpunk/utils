
/*
Converts a color from hex format to rgb format.
@param {string} hex - the color in hex format
@returns {string} - returns the color in rgb format
@example
const hexColor = "#3498db";
const rgbColor = hexToRgb(hexColor);
console.log(rgbColor); // Outputs: "rgb(52, 152, 219)"
 */
const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
};

// Example
const hexColor = "#3498db";
const rgbColor = hexToRgb(hexColor);
console.log(rgbColor); // Outputs: "rgb(52, 152, 219)"
