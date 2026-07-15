import movie from "./data";

function MovieCard({ searchQuery }) {
  const filteredMovies = movie.filter((m) =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      {filteredMovies.map((m) => (
        <div className="card" key={m.id}>
          <img className="images" src={m.poster} alt={m.title} />
          <h3>{m.title}</h3>
          <span>⭐ {m.rating}</span>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;

