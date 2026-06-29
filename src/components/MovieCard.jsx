import movie from "./data";

function MovieCard (){
  return(
    <div className="card">

      <img 
        src={movie.poster} 
        alt={movie.title}
      />

      <h3>{movie.title}</h3>

      <span>⭐{movie.rating}</span>

    </div>
  );
}

export default MovieCard;