import { useState, useEffect} from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/row";
import Col from 'react-bootstrap/col';
import Button from "react-bootstrap/button";

export const MainView = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const storedToken = localStorage.getItem("token");
      const [movies, setMovies] = useState([]);
      // Create a state to keep track of what movie is selected
      // [x,y] = useState() creates a variable x to store and a function y to store information in that variable
      const [selectedMovie, setSelectedMovie] = useState(null);
      const [user, setUser] = useState(storedUser? storedUser: null);
      const [token, setToken] = useState(storedToken? storedToken: null);

      useEffect(() => {
        if (!token) {
          return;
        }
        
        fetch('https://movie-flix-api-7-2024-a1aaa29e3315.herokuapp.com/movies', {
          headers: { Authorization: `Bearer ${token}` }
        }) 
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
      }, [token]);


      return(
        <Row className="justify-content-md-center">
          {!user ? ( 
          
          <Col md={5}>
            <h1>Existing MyFlix Users</h1>
            <h2>Log In:</h2>
            <LoginView
              onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
            />
            <h1>New MyFlix User?</h1>
            <h2>Sign Up for MyFlix Here:</h2>
            <SignupView />
          </Col>

                 
        ) : selectedMovie ? ( 
          <Col md={8}>
            <MovieView movie={selectedMovie} 
                       onBackClick={() => setSelectedMovie(null)} />
          </Col>
        ) : movies.length === 0 ? ( 
          <div>The list is empty!</div>
        ) : ( 
          //return the div for the MovieCard
          //Passes in the list of movies into a loop (map)
          //gives the prop elements of movie, key, onMovieClick
          //onMovieClick is what exposes the setSelectedMovie to the MovieCard so it can be set as the onClick event
          <>
            {movies.map((movie) => (
              <Col className="mb-5" key={movie.id} md={3}>
                <MovieCard movie={movie} 
                           key={movie.id}          
                           onMovieClick={(newSelectedMovie) => {
                           setSelectedMovie(newSelectedMovie);
          }}
          />
         </Col>
      ))}
    
      <Button variant="primary" onClick={() => { setUser(null); setToken(null);  localStorage.clear(); }}>Logout</Button>
    </>
  
        
      )}
      </Row>
      )

  };
