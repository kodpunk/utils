/*
   A RGB to Hex color conversion function.
    The function takes three arguments (r, g, b) representing the red, green, and blue components of the color, and returns the color in hex format.
    @param {number} r - the red component
    @param {number} g - the green component
    @param {number} b - the blue component
    @returns {string} - returns the color in hex format
    @example
    const red = 255;
    const green = 128;
    const blue = 0;
    const hexColor = rgbToHex(red, green, blue);
    console.log(hexColor); // Outputs: "#ff8000"

 */
const rgbToHex = (r, g, b) => {
  // Ensure the values are within the valid range (0 to 255)
  const clamp = (value) => Math.max(0, Math.min(value, 255));

  // Convert each component to a two-digit hexadecimal value
  const componentToHex = (component) => {
    const hex = clamp(component).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  // Combine the components into a hex color code
  const hex = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

  return hex;
};

// Example
const red = 255;
const green = 128;
const blue = 0;

const hexColor = rgbToHex(red, green, blue);
console.log(hexColor); // Outputs: "#ff8000"
