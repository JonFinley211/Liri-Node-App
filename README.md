# LIRI-NODE-APP
A Node based SIRI CLI app that makes searches to Spotify, BandsInTown, and OMDB API's. 

# To begin just type "node liri" 
LIRI will then give you the options

## Search Concerts with Bands In Town
To search for a concert just type "node liri concert-this **any artist who is touring**".
LIRI will then take the search and apply it to the Bands In Town API and return the soonest result for a concert for that artist. 
**Below is an image of a BandsInTown search.**
![liri concert](/images/doc1.png)


## Search Songs on Spotify
To search for a song just type "node liri spotify-this-song **any song title**".
LIRI will search the Spotify API and return several relevant results including links to listen to a portion of the song. 
**Below is an image of a Spotify search.**
![liri spotify](/images/doc3.png)
https://gph.is/g/ZxPXkbz
https://media.giphy.com/media/XbPNTadUHLJkC5ymqB/giphy.gif
https://giphy.com/gifs/XbPNTadUHLJkC5ymqB/html5

## Search Movies with OMDB
To search for a movie just type "node liri movie-this **any movie title>".
LIRI will search the Open Movie Database API and return the most relevant movie as well as Rotten Tomatoes score, year, actors, plot and more. 
**Below is an image of an OMDB search. .**
![liri movie](/images/doc2.png)

## Search something from a text file
Lastly, if you're not sure what to search for you can simply run: "node liri do-what-it-says".
This will return a random search from the file "random.txt". It could be a movie, concert, or song result. Currently it returns a song search for I "Want it That Way", if you haven't seen it I recommend it. 
**Below is an image of a random search.no**
![liri random](/images/doc4.png)

## To create LIRI ...
Liri.js uses three API's to power the app; Spotify, BandsInTown, and OMDB. an .env file to hide the Spotify keys. These included a Client ID and a Secret Key. These were then called into a keys.js file, which was then required into the main liri.js file. This allows the keys to remain secret even while saving my work publicly to GitHub.

the do-what-it-says uses the fs package in node. Using this I was able to run a search on a text file called (random.txt). Inside of that file was held a random command and search value. Currently it holds "spotifuy-this-song,"I Want it that Way", but can be updated to hold any of the three searches (movie, song, or concert).

## Log.txt using fs package
the node app liri will also store recent searches in a text file named log.txt
(/images/doc5.png)


Take a look at my Portfolio Page
https://jonfinley211.github.io/Responsive-portfolio/

