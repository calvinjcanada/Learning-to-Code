const getTodos = resource => {
  // Take in API URL in callback function

  return new Promise((resolve, reject) => {
    // Return new promise that either resolves data [processes] or rejects it [error]
    const request = new XMLHttpRequest();
    // New HTTP API object

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        //Request completed and data was returned
        const data = JSON.parse(request.responseText);
        // Turn data into an array of JS objects
        resolve(data);
        // Process data
      } else if (request.readyState === 4) {
        // Request completed but no data no returned
        reject("could not fetch the data");
      }
    });

    request.open("GET", resource);
    // Initiate the request
    request.send();
    // Send the data
  });
};

getTodos("json/luigi.json")
  .then(data => {
    // Process data
    console.log("promise 1 resolved:", data);
    return getTodos("json/mario.json");
    // Go to next file
  })
  .then(data => {
    // Process data
    console.log("promise 2 resolved:", data);
    return getTodos("json/shaun.json");
    // Go to next file
  })
  .then(data => {
    // Process data
    console.log("promise 3 resolved:", data);
  })
  .catch(err => {
    // Error
    // Catches all errors from each Promise
    console.log("promise rejected:", err);
  });
