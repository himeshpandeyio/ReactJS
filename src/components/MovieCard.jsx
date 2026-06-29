function MovieCard() {
  const movie = [
    {
      id: 1,
      title: "Inception",
      rating: 8.8,
      poster:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      rating: 8.6,
      poster:
        "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    },
    {
      id: 3,
      title: "The Wolverine",
      rating: 8.5,
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/The_Wolverine_posterUS.jpg/250px-The_Wolverine_posterUS.jpg",
    },
    {
      id: 4,
      title: "Troy",
      rating: 8.4,
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Troy_03500296.png/250px-Troy_03500296.png",
    },
  ];

  return (
    <div className="container">
      {movie.map((m) => (
        <div className="card" key={m.id}>
          <img className="images" src={m.poster} alt={m.title} />
          <h3>{m.title}</h3>
          <span>⭐{m.rating}</span>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
