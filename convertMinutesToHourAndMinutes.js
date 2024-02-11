/*
  Write a function that takes an integer minutes and converts it to hours and minutes. The function should return a string that formats the time correctly.
  @param {number} minutes - the number of minutes
  @returns {string} - returns the time in hours and minutes
  @example
  const totalMinutes = 150;
  const formattedTime = convertMinutesToHoursAndMinutes(totalMinutes);
  console.log(formattedTime); // Outputs: "2 hours 30 minutes"
 */
const convertMinutesToHoursAndMinutes = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hours ${remainingMinutes} minutes`;
};

// Example
const totalMinutes = 150;
const formattedTime = convertMinutesToHoursAndMinutes(totalMinutes);
console.log(formattedTime); // Outputs: "2 hours 30 minutes"
