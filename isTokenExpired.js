// Sample Access Token
const accessToken = "your_access_token_here";

// Function to check if the token has expired
const isTokenExpired = (accessToken) => {
  try {
    // Decode the token without verifying the signature
    const decodedToken = JSON.parse(atob(accessToken.split(".")[1]));

    // Get the expiration timestamp (in seconds)
    const expirationTime = decodedToken.exp;

    // Get the current time (in seconds)
    const currentTime = Math.floor(Date.now() / 1000);

    // Check if the token has expired
    return expirationTime < currentTime;
  } catch (error) {
    // If decoding fails, consider the token as expired
    return true;
  }
};

// Call the function with your access token
const isExpired = isTokenExpired(accessToken);

// Use the result as needed
if (isExpired) {
  console.log("Token has expired.");
} else {
  console.log("Token is still valid.");
}
