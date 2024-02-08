const convertMinutesToHoursAndMinutes = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} hours ${remainingMinutes} minutes`;
};

// Example
const totalMinutes = 150;
const formattedTime = convertMinutesToHoursAndMinutes(totalMinutes);
console.log(formattedTime); // Outputs: "2 hours 30 minutes"
