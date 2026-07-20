import { useState, useEffect } from "react";

function MovieCard({ searchQuery, favourites, onToggleFavourite, type }) {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // Replace this URL with your actual API endpoint
    // We append the type (movie or series) as a query parameter if it exists
    const url = type 
      ? `https://api.example.com/media?type=${type}` 
      : `https://api.example.com/media`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMediaList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [type]); // Refetch whenever the type changes (switching routes)

  // Client-side search filtering
  const filteredMedia = mediaList.filter((m) =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div style={{ color: "white", textAlign: "center" }}>Loading content...</div>;
  }

  return (
    <div className="container">
      {filteredMedia.map((m) => {
        const isFavourite = favourites.some((fav) => fav.id === m.id);

        return (
          <div className="card" key={m.id} style={{ position: "relative" }}>
            <img className="images" src={m.poster} alt={m.title} />
            
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