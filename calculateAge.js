
/*
* Write a function that takes a birthdate and returns the age. The birthdate is in the format "YYYY-MM-DD".
*  @param {string} birthdate
*  @returns {number} - returns the age based on the birthdate
* @example
* const birthdate = "1990-05-15";
* const age = calculateAge(birthdate);
* console.log(age); // Outputs the current age based on the birthdate
*/
const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

// Example
const birthdate = "1990-05-15";
const age = calculateAge(birthdate);
console.log(age); // Outputs the current age based on the birthdate
