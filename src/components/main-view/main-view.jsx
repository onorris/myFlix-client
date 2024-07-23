import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
          id: 1,
          title: "Silence of the Lambs",
          image:
          "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          director: "Jonathan Demme",
          genre: "Thriller"
        },
        {
          id: 2,
          title: "The Lion King",
          image:
            "https://filmartgallery.com/cdn/shop/products/The-Lion-King-Vintage-Movie-Poster-Original-1-Sheet-27x41_e57ce6da-de95-40b3-9238-84ebca956319.jpg?v=1680238945",
          director: "Rob Minkoff",
          genre: "Animated"
        },
        {
          id: 3,
          title: "Stuart Little",
          image:
            "https://m.media-amazon.com/images/I/51OhmTSd+5L._AC_UF894,1000_QL80_.jpg",
          director: "Rob Minkoff",
          genre: "Animated"
        },
        {
          id: 4,
          title: "JoJo Rabbit",
          image:
            "https://www.movieposters.com/cdn/shop/products/jojorabbit.11.29_480x.progressive.jpg?v=1575064555",
          director: "Taika Waititi",
          genre: "Comedy"
        },
        {
          id: 5,
          title: "Thor: Ragnarok",
          image:
            "https://m.media-amazon.com/images/I/A1HBBNzBdxL.jpg",
          director: "Taika Waititi",
          genre: "Action"
        }
      ]);

      // Create a state to keep track of what movie is selected
      // [x,y] = useState() creates a variable x to store and a function y to store information in that variable
      const [selectedMovie, setSelectedMovie] = useState(null);

      // If there is a selected movie show the MovieView component
      if (selectedMovie) {
        return <MovieView movie={selectedMovie} 
                          onBackClick={() => setSelectedMovie(null)} />;
      }
      // Ensure we have some movies
      if (movies.length === 0) {
        return <div>The list is empty!</div>;
      }

    return (
        //return the div for the MovieCard
        //Passes in the list of movies into a loop (map)
        //gives the prop elements of movie, key, onMovieClick
        //onMovieClick is what exposes the setSelectedMovie to the MovieCard so it can be set as the onClick event
    <div>
      {movies.map((movie) => {
        return <MovieCard movie={movie} 
                          key={movie.id}          
                          onMovieClick={(newSelectedMovie) => {
                            setSelectedMovie(newSelectedMovie);
          }}/>;
      })}
    </div>
  );
  };