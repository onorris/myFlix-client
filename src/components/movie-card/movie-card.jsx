import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = (prop) => {
    return (
    <Card>
   {/* <Card.Img variant="top" src={book.image} /> */} 
    <Card.Body>
      <Card.Title>{prop.movie.title}</Card.Title>
      <Card.Text>{prop.movie.director}</Card.Text>
      <Button onClick={() => prop.onMovieClick(prop.movie)} variant="link">
        Open
      </Button>
    </Card.Body>
  </Card>
);
};

  MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        director: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  }