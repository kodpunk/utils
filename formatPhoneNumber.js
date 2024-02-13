
/*
    * Given a string of numbers, format the phone number in a human-readable format.
    * @param {string} phoneNumber - the phone number
    * @returns {string} - returns the phone number in human-readable format
    * @example
    * const phoneNumberToFormat = "1234567890";
    * const formattedPhoneNumber = formatPhoneNumber(phoneNumberToFormat);
    * console.log(formattedPhoneNumber); // Outputs: "(123) 456-7890"
    *
 */
const formatPhoneNumber = (phoneNumber) => {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phoneNumber;
};

// Example
const phoneNumberToFormat = "1234567890";
const formattedPhoneNumber = formatPhoneNumber(phoneNumberToFormat);
console.log(formattedPhoneNumber); // Outputs: "(123) 456-7890"
