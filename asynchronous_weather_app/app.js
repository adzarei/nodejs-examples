const request = require('request');
const yargs = require('yargs');

var argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for'
        }
})
    .help()
    .alias('help','h')
    .argv;

var encodedURL = encodeURIComponent(argv.a);

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=5yTSvW7Y6Z1Zcx53CqKUgvtRvnSOv91o&location=${encodedURL}`,
    json: true
},(err, response, body) => {
    var lat = body.results[0].locations[0].latLng.lat;
    var lon = body.results[0].locations[0].latLng.lng;
    var street = body.results[0].locations[0].street;
    var statuscode = response.statusCode;

    console.log(`Status Code: ${statuscode}`);
    console.log(`Latitud: ${lat}`);
    console.log(`Longitud: ${lon}`);
    console.log(`street: ${street}`);
});