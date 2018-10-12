/*===========================
    create an array of movies objects. 
    Iterate through them and print out some text
==============================*/

var movies = [
    {
        title: "Movie 1",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Movie 2",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Movie 3",
        hasWatched: true,
        rating: 3
    }
];

movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
});