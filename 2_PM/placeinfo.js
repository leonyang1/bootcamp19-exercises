/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */
const googleMapsClient = require('./google_api.js');

let id;
// Geocode an address with a promise
googleMapsClient.findPlace({ input: process.argv[2], inputtype: 'textquery'}).asPromise()
    .then((response) => {
      let id = response.json.candidates[0].place_id;
      googleMapsClient.place({ placeid: id}).asPromise()
        .then((response) => {
            let lat = response.json.result.geometry.location.lat
            let lng = response.json.result.geometry.location.lng
            let address = response.json.result.formatted_address
            console.log(`${process.argv[2]} is located at coordinates latitude ${lat} and longitude ${lng}, at the address ${address}.`)
        })
        .catch((err) => {
            console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
