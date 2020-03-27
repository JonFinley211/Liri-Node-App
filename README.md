# LIRI-NODE-APP
A Node based SIRI CLI app that makes searches to Spotify, BandsInTown, and OMDB API's. 

## LIRI can search Concerts with Bands In Town
To search for a concert just type "node liri concert-this **any artist who is touring**".
LIRI will then take the search and apply it to the Bands In Town API and return the soonest result for a concert for that artist. 
**BandsInTown search.**
![liri concert](/images/doc1.png)


## LIRI can search Songs on Spotify
To search for a song just type "node liri spotify-this-song **any song title**".
LIRI will search the Spotify API and return several relevant results including links to listen to a portion of the song. 
**Spotify search.**
![liri spotify](/images/doc3.png)
![liri spotify](/images/sppotgif.gif)


## LIRI can search Movies with OMDB
To search for a movie just type "node liri movie-this **any movie title>".
LIRI will search the Open Movie Database API and return the most relevant movie as well as Rotten Tomatoes score, year, actors, plot and more. 
**OMDB search.**
![liri movie](/images/doc2.png)

## LIRI can also search from a text file
simply run: "node liri do-what-it-says".
This will return a random search from the file "random.txt". It could be a movie, concert, or song result. It a searchs  for I "Want it That Way" using "spotify-this-song"  
**do-what-it-says**
![liri random](/images/doc4.png)

## About LIRI .
Liri.js uses three API's to power the app; Spotify, BandsInTown, and OMDB. an .env file to hide the Spotify keys. These included a Client ID and a Secret Key. These were then called into a keys.js file, which was then required into the main liri.js file. This allows the keys to remain secret even while saving work publicly to GitHub.

## Log.txt using fs package
the node app liri will also store recent searches in a text file named log.txt
![lori random](/images/doc5.png)

## How to install
Clone Repository  
NPM Install   
Type node liri do-what-it-says    


## Take a look at my Portfolio Page
https://jonfinley211.github.io/Responsive-portfolio/

