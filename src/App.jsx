import { useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Favourite from "./components/Favourite";
import {Routes,Route} from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app">
      <Navbar />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <h1 className="h1">Top rated movies:</h1>
      <MovieCard searchQuery={searchQuery} />
    </div>
  );
}

export default App;