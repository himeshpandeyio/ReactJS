function Favourite({ favourites, onToggleFavourite }) {
  if (favourites.length === 0) {
    return (
      <div className="favourites" style={{ color: "antiquewhite", textAlign: "center", marginTop: "50px" }}>
        <h2>No Favourite Movies Yet</h2>
        <p>Start adding movies to your favourites and they will appear here!</p>
      </div>
    );
  }

  return (
    <div className="favourites-page" style={{ padding: "20px" }}>
      <h1 className="h1">Your Favourite Movies:</h1>
      <div className="container">
        {favourites.map((m) => (
          <div className="card" key={m.id} style={{ position: "relative" }}>
            <img className="images" src={m.poster} alt={m.title} />
            
            {/* Remove from Favourites Button */}
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
                padding: "6px 9px"
              }}
            >
              ❤️
            </button>

            <h3>{m.title}</h3>
            <span>⭐ {m.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourite;