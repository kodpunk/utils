const isValidUsername = (username, minLength, maxLength) => {
  // Define a regular expression pattern for valid usernames
  const usernamePattern = /^[a-zA-Z0-9_-]+$/;

  // Check if the length is within the specified range
  const isLengthValid =
    username.length >= minLength && username.length <= maxLength;

  // Check if the username matches the allowed pattern
  const isPatternValid = usernamePattern.test(username);

  // Return true if both length and pattern are valid, otherwise return false
  return isLengthValid && isPatternValid;
};

// Example usage
const usernameToCheck = "user_name123";
const isUsernameValid = isValidUsername(usernameToCheck, 5, 15);

if (isUsernameValid) {
  console.log(`Username "${usernameToCheck}" is valid.`);
} else {
  console.log(`Username "${usernameToCheck}" is not valid.`);
}
