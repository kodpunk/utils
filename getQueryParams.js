/*
 A subroutine to get the query parameters from a URL.
    The function takes a URL as an argument and returns an object with the query parameters as key-value pairs.
    @param {string} url - the URL
    @returns {object} - returns an object with the query parameters as key-value pairs
    @example
    const sampleURL = "https://example.com/page?name=John&age=25";
    const queryParams = getQueryParameters(sampleURL);
    console.log(queryParams); // Outputs: { name: 'John', age: '25' }

 */
const getQueryParameters = (url) => {
  const params = {};
  new URL(url).searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
};

// Example
const sampleURL = "https://example.com/page?name=John&age=25";
const queryParams = getQueryParameters(sampleURL);
console.log(queryParams); // Outputs: { name: 'John', age: '25' }
