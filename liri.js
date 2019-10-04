var selector = process.argv[2]
var term = process.argv.slice(3).join(" ");

require('dotenv').config();
const moment = require("moment");
var axios = require("axios");
// var request = require('request')
console.log(term);
// Make it so liri.js can take in one of the following commands:
var keys= require("./keys.js")

var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify)
var spotify = new Spotify(keys.spotify);

function runspot(){
spotify.search({ type: 'track', query: term }, function(err, data) {
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







console.log(selector)
if (!selector){
  console.log("concert-this,spotify-this-song,movie-this,do-what-it-says`")
}
if (!term){
    console.log("please input")
}
if (selector === "spotify-this-song") {
  runspot()
    console.log("spotify is searching")
}
if (selector ==="movie-this"){
  // if (!term){
  //   term='Mr.Nobody'
  // 
  runmovie()
  
}
if (selector==="concert-this"){
  runbands(term)
  console.log("finding events")
}
else if (selector === "show") {
    console.log("shows it works")
}

else {
    console.log("not working")
};

// function bandsintown
// console.log(term);
// var bandsdata=
function runmovie(){
  
var queryUrl = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
// console.log(term);
// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Movie Title           : " + response.data.Title);
    console.log("Release Year          : " + response.data.Year);
    console.log("IMDB Rating           : " + response.data.imdbRating);
    console.log("Rotten Tomatoes Rating: "+ response.data.Ratings[0].Value);
    console.log("Country where Porduced: "+ response.data.Country);
    console.log("Language of Movie     : "+ response.data.Language);
    console.log("Plot Summery          : " + response.data.Plot);
    
    // * Title of the movie.
    //    * Year the movie came out.
    //    * IMDB Rating of the movie.
    //    * Rotten Tomatoes Rating of the movie.
    //    * Country where the movie was produced.
    //    * Language of the movie.
    //    * Plot of the movie.
    //    * Actors in the movie.
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
      
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
}





function runbands(term){
  axios.get("https://rest.bandsintown.com/artists/"+ term +"/events?app_id=codingbootcamp")
  .then(
    function (response) {
      console.log("upcoming city : " +response.data[0].venue.city);
      console.log("venue         : "+response.data[0].venue.name);
      console.log("Date of Show  : " +moment(response.data[0].datetime).format('MM/DD/YYYY'));
    });

  }

// request(queryUrl, function(error, response, body) {

//   if (!error && response.statusCode === 200) {
// console.log()
//     // var JS = JSON.parse(body);
    // for (i = 0; i < JS.length; i++)
    // {
    //   var dateTime = JS[i].datetime;
    //     var month = dateTime.substring(5,7);
    //     var year = dateTime.substring(0,4);
    //     var day = dateTime.substring(8,10);
    //     var dateForm = month + "/" + day + "/" + year
  
    //   console.log("Name: " + JS[i].venue.name));
    //   console.log("City: " + JS[i].venue.city));
    //   console.log("Date: " + dateForm));


    


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