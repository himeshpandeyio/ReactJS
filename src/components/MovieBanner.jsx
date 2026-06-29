import movie from "./data";

console.log(movie);

function MovieBanner() {
  return (
    <div className="banner">
      {movie.map((m) => (
        <div key={m.id}>
          <h2>{m.title}</h2>
          <p>Rating: {m.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieBanner;
