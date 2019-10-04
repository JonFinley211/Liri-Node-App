
require('dotenv').config();

// Make it so liri.js can take in one of the following commands:
var keys= require("./keys.js")
// * `concert-this`
// var fs= require("fs")
// // * `spotify-this-song`
// var axios= require("axios");
// * `movie-this`

// * `do-what-it-says`


var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify)
var spotify = new Spotify(keys.spotify);

console.log(keys)
 
// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret></your>
// });
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(JSON.stringify(data, null, 2));
});
//   spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
//     spotify.search({ type: 'track', query: 'All the Small Things' })
//     .then(function(response) {
//       console.log(response);
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// //   console.log(JSON.stringify(data); 
//   });