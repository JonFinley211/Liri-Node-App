var selector = process.argv[2]
var term = process.argv.slice(3).join(" ");

require('dotenv').config();
const moment = require("moment");
const fs = require("fs");
var axios = require("axios");
var keys= require("./keys.js")
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

function runspot(term){
spotify.search({ type: 'track', query: term }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
// console.log(JSON.stringify(data.tracks.items[0], null, 2));
// console.log(data.tracks.items[0].album.artists[0]);
fs.appendFileSync("log.txt", "**********SONG INFO*********\n");
console.log("this song's artist is  :   " + data.tracks.items[0].album.artists[0].name);
fs.appendFileSync("log.txt","this song's artist is  :   " + data.tracks.items[0].album.artists[0].name+"\n");
console.log("this song's name is    :   "+data.tracks.items[0].name);
fs.appendFileSync("log.txt","this song's name is    :   "+data.tracks.items[0].name+"\n");
console.log("this song's album name :   "+ data.tracks.items[0].album.name);
fs.appendFileSync("log.txt","this song's album name :   "+ data.tracks.items[0].album.name+"\n");
console.log("link to preview song   :   " +data.tracks.items[0].album.artists[0].external_urls.spotify);
fs.appendFileSync("log.txt","link to preview song   :   " +data.tracks.items[0].album.artists[0].external_urls.spotify+"\n");
});
 }

if (!selector){
  console.log("concert-this,spotify-this-song,movie-this,do-what-it-says`")
}
if (!term){
   
}
if (selector === "spotify-this-song") {
  runspot(term)
}
if (selector ==="movie-this"){
  if (!term){
    term='Mr.Nobody'
    console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
  }
  runmovie()
    
}
if (selector==="concert-this"){
  runbands(term)
  console.log("finding events")
}
if (selector==="do-what-it-says"){
  doWhat()
  console.log("doing what your say")
}
else if (selector === "show") {
    console.log("shows it works")
}

else {
   
};

function runmovie(){ 
var queryUrl = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
axios.get(queryUrl).then(
  function(response) {
    console.log("**********MOVIE INFO*********");
    fs.appendFileSync("log.txt", "**********MOVIE INFO*********\n");
    console.log("Movie Title           : " + response.data.Title);
    fs.appendFileSync("log.txt", "Movie Title: " + response.data.Title+"\n");
    console.log("Release Year          : " + response.data.Year);
   fs.appendFileSync("log.txt","Release Year          : " + response.data.Year+"\n")
    console.log("IMDB Rating           : " + response.data.imdbRating);
  fs.appendFileSync("log.txt","IMDB Rating           : " + response.data.imdbRating+"\n");
   console.log("Rotten Tomatoes Rating: "+ response.data.Ratings[0].Value);
   fs.appendFileSync("log.txt","Rotten Tomatoes Rating: "+ response.data.Ratings[0].Value+"\n"); 
   console.log("Country where Porduced: "+ response.data.Country);
fs.appendFileSync("log.txt","Country where Porduced: "+ response.data.Country+"\n");
    console.log("Language of Movie     : "+ response.data.Language);
 fs.appendFileSync("log.txt","Language of Movie     : "+ response.data.Language+"\n"); 
    console.log("Plot Summery          : " + response.data.Plot);
 fs.appendFileSync("log.txt","Plot Summery          : " + response.data.Plot+"\n");
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
      fs.appendFileSync("log.txt", "**********EVENT INFO*********\n");
      fs.appendFileSync("log.txt","band name     : "+term+"\n");
      console.log("band name     : "+term);
      fs.appendFileSync("log.txt","upcoming city : " +response.data[0].venue.city+"\n");
      console.log("upcoming city : " +response.data[0].venue.city);
      fs.appendFileSync("log.txt","venue         : "+response.data[0].venue.name+"\n");
      console.log("venue         : "+response.data[0].venue.name);
      console.log("Date of Show  : " +moment(response.data[0].datetime).format('MM/DD/YYYY'));
      fs.appendFileSync("log.txt","Date of Show  : " +moment(response.data[0].datetime).format('MM/DD/YYYY')+"\n");
    });
  }

  function doWhat() {
    // Use fs to read the random.txt file and run the search
    fs.readFile("random.txt", "utf8", function (error, data) {
        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }
        // We will then run the search

        // Then split it by commas (to make it more readable)
        let dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        let selector = dataArr[0];
        let term = dataArr[1];
        function doSearch() {
            if (selector === "concert-this") {
                runbands();
            } else if (selector === "spotify-this-song") {
                runspot(term,selector);
            } else if (selector === "movie-this") {
                runmovie();
            }
        }
        doSearch();
    });
};
console.log("finnished");



    


