import "./App.css";
import MovieCard from "./components/moviecard";

function App(){
    return (
        <>
          <MovieCard movie={{title:"HP's Film", release:"2026"}}/>
          <MovieCard movie={{title:"YRF's Film", release:"2026"}}/>
          <MovieCard movie={{title:"KJ's Film", release:"2026"}}/>
          <MovieCard movie={{title:"Chillie's Film", release:"2026"}}/>
        </>
    )
}

export default App