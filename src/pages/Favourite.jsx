import "../css/Favourite.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favourite = () => {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="favourites-empty">
        <h2>No Favourite Movies</h2>
        <p>Click the heart icon on a movie to add it to your favourites.</p>
      </div>
    );
  }

  return (
    <div className="favourites">
      <h2>Your Favourites</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favourite;