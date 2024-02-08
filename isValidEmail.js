const isValidEmail = (email) => {
  // Define a regular expression pattern for a valid email address
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the allowed pattern
  const isPatternValid = emailPattern.test(email);

  // Return true if the pattern is valid, otherwise return false
  return isPatternValid;
};

// Example usage
const emailToCheck = "user@example.com";
const isEmailValid = isValidEmail(emailToCheck);

if (isEmailValid) {
  console.log(`Email "${emailToCheck}" is valid.`);
} else {
  console.log(`Email "${emailToCheck}" is not valid.`);
}
