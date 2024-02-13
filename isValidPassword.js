
/*
    The function isValidPassword takes in a password and checks if it is valid based on the following criteria:
    - The password must be at least minLength characters long.
    - The password must be at most maxLength characters long.
    - The password must contain at least one uppercase letter if requireUppercase is true.
    - The password must contain at least one lowercase letter if requireLowercase is true.
    - The password must contain at least one special character if requireSpecialChar is true.
    The function returns true if the password is valid based on the criteria, and false otherwise.
    @param {string} password - the password to check
    @param {number} minLength - the minimum length of the password
    @param {number} maxLength - the maximum length of the password
    @param {boolean} requireUppercase - whether the password must contain at least one uppercase letter
    @param {boolean} requireLowercase - whether the password must contain at least one lowercase letter
    @param {boolean} requireSpecialChar - whether the password must contain at least one special character
    @returns {boolean} - returns true if the password is valid, false otherwise
    @example
    const passwordToCheck = "Passw0rd!";
    const isPasswordValid = isValidPassword(passwordToCheck, 8, 20, true, true, true);
    if (isPasswordValid) {
        console.log(`Password is valid.`);
    } else {
        console.log(`Password is not valid.`);
    }

 */
function isValidPassword(
  password,
  minLength,
  maxLength,
  requireUppercase,
  requireLowercase,
  requireSpecialChar
) {
  const uppercaseRegex = requireUppercase ? "(?=.*[A-Z])" : "";
  const lowercaseRegex = requireLowercase ? "(?=.*[a-z])" : "";
  const specialCharRegex = requireSpecialChar
    ? "(?=.*[!@#$%^&*()_+\\-=\\[\\]{}|;':\",.<>/?`~])"
    : "";

  const passwordPattern = new RegExp(
    `^${uppercaseRegex}${lowercaseRegex}${specialCharRegex}[\\x20-\\x7E]{${minLength},${maxLength}}$`
  );

  const isPatternValid = passwordPattern.test(password);

  return isPatternValid;
}

// Example usage
const passwordToCheck = "Passw0rd!";
const isPasswordValid = isValidPassword(
  passwordToCheck,
  8,
  20,
  true,
  true,
  true
);

if (isPasswordValid) {
  console.log(`Password is valid.`);
} else {
  console.log(`Password is not valid.`);
}
