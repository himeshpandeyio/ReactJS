import movie from "../data"; // updated path to match standard component folder structure

function MovieCard({ searchQuery, favourites, onToggleFavourite }) {
  const filteredMovies = movie.filter((m) =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      {filteredMovies.map((m) => {
        const isFavourite = favourites.some((fav) => fav.id === m.id);

        return (
          <div className="card" key={m.id}>
            <div className="poster-container" style={{ position: "relative" }}>
              <img className="images" src={m.poster} alt={m.title} />
              <button 
                onClick={() => onToggleFavourite(m)}
                className="fav-btn"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "rgba(0,0,0,0.6)",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "20px",
                  padding: "5px 8px"
                }}
              >
                {isFavourite ? "❤️" : "🤍"}
              </button>
            </div>
            <h3>{m.title}</h3>
            <span>⭐ {m.rating}</span>
          </div>
        );
      })}
    </div>
  );
}

export default MovieCard;