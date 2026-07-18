import movie from "./data";

function MovieCard({ searchQuery, favourites, onToggleFavourite }) {
  const filteredMovies = movie.filter((m) =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      {filteredMovies.map((m) => {
        // Check if this specific movie is already in the favourites array
        const isFavourite = favourites.some((fav) => fav.id === m.id);

        return (
          <div className="card" key={m.id} style={{ position: "relative" }}>
            <img className="images" src={m.poster} alt={m.title} />
            
            {/* Love Button Overlay */}
            <button 
              onClick={() => onToggleFavourite(m)}
              className="love-btn"
              style={{
                position: "absolute",
                top: "15px",
                right: "25px",
                background: "rgba(0, 0, 0, 0.6)",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "22px",
                padding: "6px 9px",
                transition: "transform 0.2s ease"
              }}
            >
              {isFavourite ? "❤️" : "🤍"}
            </button>

            <h3>{m.title}</h3>
            <span>⭐ {m.rating}</span>
          </div>
        );
      })}
    </div>
  );
}

export default MovieCard;