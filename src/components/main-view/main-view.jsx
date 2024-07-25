import { useState, useEffect} from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
      const [movies, setMovies] = useState([]);
      useEffect(() => {
        fetch('https://movie-flix-api-7-2024-a1aaa29e3315.herokuapp.com/movies')
          .then((response) => response.json())
          .then((data) => {
            const moviesFromApi = data.map((movie) => {
              
              return{
                id: movie._id,
                title: movie.Title,
                director: movie.Director.Name,
                genre: movie.Genre.Name
              };
            });
            setMovies(moviesFromApi)
          });
      }, []);
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
