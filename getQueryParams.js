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
