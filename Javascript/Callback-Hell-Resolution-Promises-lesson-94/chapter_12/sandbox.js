const getTodos = resource => {
  // Pass in API URL

  return new Promise((resolve, reject) => {
    // First thing you do when using promises is return a new promise which does all of the API functionality
    // Resolve = we got the data we want
    // Reject = we got an error
    const request = new XMLHttpRequest();
    // New API object

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        // Request completed and returned data [no errors]
        const data = JSON.parse(request.responseText);
        // Parse the data into array of JS objects
        resolve(data);
        // Process the data
      } else if (request.readyState === 4) {
        // Request completed but returned no data
        reject("could not fetch the data");
        // Send error
      }
    });

    request.open("GET", resource);
    // Initiate the request to the API URL
    request.send();
    // Send data
  });
};

getTodos("json/luigi.json")
  // Get the data and process it
  .then(data => {
    console.log("promise resolved:", data);
  })
  .catch(err => {
    console.log("promise rejected:", err);
  });

// promise (just example)
const getSomething = () => {
  return new Promise((resolve, reject) => {
    // First thing you do is return a Promise
    // Resolve = we got the data we want
    // Reject = we got an error
    // Resolve and Reject are built into the Promise API

    // do something (fetch data)
    // resolve('some data');
    // Resolve Function
    reject("some error");
    // Reject Function
  });
};

// getSomething().then(data => {
// Retrieve data
//   console.log('promise resolved:', data);
// }, err => {
// Catch an error
//   console.log('promise rejected:', err);
// });

// getSomething().then(data => {
// Retrieve data then resolve it
//   console.log('promise resolved:', data);
// }).catch(err => {
// Catch an error
//   console.log('promise rejected:', err);
// });
