/*
Write a function that takes an amount and returns a string formatted as money.
@param {number} amount - the amount of money
@returns {string} - returns the amount formatted as money
@example
const money = 1234567.89;
const formattedMoney = formatMoney(money);
console.log(formattedMoney); // Outputs: "1,234,567.89"
 */
const formatMoney = (amount) => {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

// Example
const money = 1234567.89;
const formattedMoney = formatMoney(money);
console.log(formattedMoney); // Outputs: "1,234,567.89"
