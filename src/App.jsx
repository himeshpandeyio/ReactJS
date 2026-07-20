import { useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Favourite from "./components/Favourite";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favourites, setFavourites] = useState([]); 

  const toggleFavourite = (movieItem) => {
    if (favourites.some((fav) => fav.id === movieItem.id)) {
      setFavourites(favourites.filter((fav) => fav.id !== movieItem.id));
    } else {
      setFavourites([...favourites, movieItem]);
    }
  };

  return (
    <main className="app">
      <Navbar />[cite: 6]
      
      <Routes>
        {/* Home Route - Shows all content */}
        <Route 
          path="/" 
          element={
            <>
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <h1 className="h1">Top rated:</h1>
              <MovieCard 
                searchQuery={searchQuery} 
                favourites={favourites} 
                onToggleFavourite={toggleFavourite} 
              />
            </>
          } 
        />

        {/* Movies Route */}
        <Route 
          path="/movies" 
          element={
            <>
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <h1 className="h1">Movies:</h1>
              <MovieCard 
                type="movie"
                searchQuery={searchQuery} 
                favourites={favourites} 
                onToggleFavourite={toggleFavourite} 
              />
            </>
          } 
        />

        {/* Series Route */}
        <Route 
          path="/series" 
          element={
            <>
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <h1 className="h1">TV Series:</h1>
              <MovieCard 
                type="series"
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