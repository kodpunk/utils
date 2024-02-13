/*
  This function generates a random string of a given length. Useful when you need to generate a random string for a unique identifier or a password.
    @param {number} length - the length of the random string
    @returns {string} - returns a random string of the given length
    @example
    const randomString = generateRandomString(8);
    console.log(randomString); // Outputs a random string of length 8
 */
const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
};

// Example
const randomString = generateRandomString(8);
console.log(randomString); // Outputs a random string of length 8
