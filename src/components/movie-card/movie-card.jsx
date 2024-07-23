export const MovieCard = (prop) => {
    return <div onClick={()=>{
        prop.onMovieClick(prop.movie)
        }}>
        {prop.movie.title}
        </div>;
  };