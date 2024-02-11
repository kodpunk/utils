const jwt = require("jsonwebtoken"); // Install this in your project

// Sample Access Token
const accessToken = "your_access_token_here";

// Your JWT Secret Key
const secretKey = "your_secret_key_here";

// Validate the Access Token
/*
    This function takes an access token and a secret key as input and returns a boolean value indicating whether the token is valid.
    Use-case: This function can be used to validate an access token received from a client request.
    @param {string} accessToken - the access token (A Valid JWT Token)
    @param {string} secretKey - the secret key used to sign the token
    @returns {boolean} - returns true if the token is valid, false otherwise
    @example
    const isValidToken = validateAccessToken(accessToken, secretKey);
    if (isValidToken) {
        console.log("Token is valid.");
    } else {
        console.log("Token is invalid.");
    }

 */
function validateAccessToken(accessToken, secretKey) {
  try {
    // Verify the token using the secret key
    const decodedToken = jwt.verify(accessToken, secretKey);

    // If verification is successful, the token is valid
    console.log("Token is valid:", decodedToken);
    return true;
  } catch (error) {
    // If verification fails, the token is invalid
    console.error("Token is invalid:", error.message);
    return false;
  }
}

// Call the function with your access token and secret key
const isValidToken = validateAccessToken(accessToken, secretKey);

// Use the result as needed
if (isValidToken) {
  // Perform actions for valid token
} else {
  // Handle invalid token case
}
