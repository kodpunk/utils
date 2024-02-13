/*
@param {string} bytes - the size of the file in bytes
@returns {string} - returns the size of the file in human-readable format
@example
const fileSizeInBytes = 1023456;
const fileSizeReadable = bytesToSize(fileSizeInBytes);
console.log(fileSizeReadable); // Outputs: "1000 KB"
 */
const bytesToSize = (bytes) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
};

// Example
const fileSizeInBytes = 1023456;
const fileSizeReadable = bytesToSize(fileSizeInBytes);
console.log(fileSizeReadable); // Outputs: "1000 KB"
