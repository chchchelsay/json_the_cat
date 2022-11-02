const apiRequestURL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback) => {
  if (!breedName) return;

  // Make our request to the Cat API
  request((apiRequestURL + breedName), function(error, response, body) {
    // Parse JSON String
    const data = JSON.parse(body);
    let err = error;
    let desc = null;

    // Check if it is empty
    if (data.length === 0) {
      //Check if the array is empty
      err = "We did not find a cat breed with that name. Try again!";
      callback(err, desc);
      return;
    }

    // Get the description
    desc = data[0].description;

    // Call the callback:
    callback(err, desc);
  });
};

module.exports = { fetchBreedDescription };