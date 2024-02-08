const formatPhoneNumber = (phoneNumber) => {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phoneNumber;
};

// Example
const phoneNumberToFormat = "1234567890";
const formattedPhoneNumber = formatPhoneNumber(phoneNumberToFormat);
console.log(formattedPhoneNumber); // Outputs: "(123) 456-7890"
