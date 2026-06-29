import MovieCard from "./components/MovieCard";
import MovieBanner from "./components/MovieBanner";
import SearchBar from "./components/SearchBar";
import movie from "./components/data";

function App (){

    return (
        <div className="container">
            <MovieCard />
            <MovieBanner />
            <SearchBar />
        </div>
    )
}

export default App;