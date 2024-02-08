const jwt = require("jsonwebtoken"); // Install this in your project

// Sample Access Token
const accessToken = "your_access_token_here";

// Your JWT Secret Key
const secretKey = "your_secret_key_here";

// Validate the Access Token
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
