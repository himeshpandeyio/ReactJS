import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="app">
      <SearchBar />
      <h1 className="h1">Top rated movies: </h1>
      <MovieCard />
    </div>
  );
}

export default App;
