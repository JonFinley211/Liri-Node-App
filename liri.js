// set any environment variables with the dotenv package:


// var globalpack = require("dotenv").config();

// Make it so liri.js can take in one of the following commands:

// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "0a15052418054314ad805060593437b5",
  secret: "03786a3829f94750bed7f3d0c15262f5"
});
 
// spotify
//   .search({ type: 'track', query: 'All the Small Things' })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
//   spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
    spotify.search({ type: 'track', query: 'All the Small Things' })
    .then(function(response) {
      console.log(response.tracks.items);
    })
    .catch(function(err) {
      console.log(err);
    });
//   console.log(JSON.stringify(data); 
//   });