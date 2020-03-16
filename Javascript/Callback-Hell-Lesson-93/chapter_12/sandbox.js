// Making a request to one API and inputting that data into a request to another API
// Done in order
const getTodos = (resource, callback) => {
  //  Resource = the API URL
  const request = new XMLHttpRequest();
  // Make new HTTP Request object

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // If the request completed and returned data
      const data = JSON.parse(request.responseText);
      // Turn the data into a JS Object array
      callback(undefined, data);
      // Input the returned data into the parameter callback function
    } else if (request.readyState === 4) {
      // If the request completed but returned no data
      callback("could not fetch the data", undefined);
      // pass in no data and an error message
    }
  });

  request.open("GET", resource);
  // Initiate the request
  request.send();
  // Send the data
};

// Function to run the function on different API endpoints in sequential order
getTodos("json/luigi.json", (err, data) => {
  console.log(data);
  getTodos("json/mario.json", (err, data) => {
    console.log(data);
    getTodos("json/shaun.json", (err, data) => {
      console.log(data);
      // This is Callback Hell = nesting callback within callback repeatedly
      // Don't do this
    });
  });
});
