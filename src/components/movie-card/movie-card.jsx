import PropTypes from "prop-types";

export const MovieCard = (prop) => {
    return <div onClick={()=>{
        prop.onMovieClick(prop.movie)
        }}>
        {prop.movie.title}
        </div>;
  };

  MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  }