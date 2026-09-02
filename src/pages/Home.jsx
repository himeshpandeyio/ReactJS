import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

const Home = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, poster: "inception.jpg", title: "Inception", release_date: "2010-07-16" },
    { id: 2, poster: "interstellar.jpg", title: "Interstellar", release_date: "2010-07-18" },
    { id: 3, poster: "gladiator.jpg", title: "Gladiator", release_date: "2010-07-19" },
    { id: 4, poster: "thor-ragnarok.jpg", title: "Thor: Ragnarok", release_date: "2010-07-26" },
    { id: 5, poster: "pursuit-of-happiness.jpg", title: "Pursuit of Happyness", release_date: "2010-07-15" },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };
  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for a movie..." 
            className="search-input"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>
      <div className="movies-grid">
        {movies.map((movie) => (
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            &&
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
