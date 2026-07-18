import { useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Favourite from "./components/Favourite";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favourites, setFavourites] = useState([]);

  // Function to add or remove a movie from favorites
  const toggleFavourite = (movieItem) => {
    if (favourites.some((fav) => fav.id === movieItem.id)) {
      setFavourites(favourites.filter((fav) => fav.id !== movieItem.id));
    } else {
      setFavourites([...favourites, movieItem]);
    }
  };

  return (
    <main className="app">
      <Navbar />
      
      <Routes>
        {/* Main Home Route */}
        <Route 
          path="/" 
          element={
            <>
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <h1 className="h1">Top rated movies:</h1>
              <MovieCard 
                searchQuery={searchQuery} 
                favourites={favourites} 
                onToggleFavourite={toggleFavourite} 
              />
            </>
          } 
        />
        
        {/* Favourites Route */}
        <Route 
          path="/favourites" 
          element={
            <Favourite 
              favourites={favourites} 
              onToggleFavourite={toggleFavourite} 
            />
          } 
        />
      </Routes>
    </main>
  );
}

export default App;