console.log(1);
console.log(2);

setTimeout(() => {
  // Fires the code and waits for the specified amount of time to retrieve the data
  // Rest of code after this function continues to run [non-blocking]
  console.log("callback function fired");
}, 2000);

console.log(3);
console.log(4);
