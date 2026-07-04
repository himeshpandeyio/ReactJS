import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <SearchBar />
      <h1 className="h1">Top rated movies: </h1>
      <MovieCard />
    </div>
  );
}

export default App;
