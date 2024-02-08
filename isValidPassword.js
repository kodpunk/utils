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
