
require('dotenv').config();

// Make it so liri.js can take in one of the following commands:
var keys= require("./keys.js")

var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify)
var spotify = new Spotify(keys.spotify);

function runspot(){
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
// console.log(JSON.stringify(data.tracks.items[0], null, 2));
// console.log(data.tracks.items[0].album.artists[0]);
console.log("link to preview song   :   " +data.tracks.items[0].album.artists[0].external_urls.spotify);
console.log("this song's artist is  :   " + data.tracks.items[0].album.artists[0].name);
console.log("this song's name is    :   "+data.tracks.items[0].name);
console.log("this song's album name :   "+ data.tracks.items[0].album.name);
});
 }
runspot();




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