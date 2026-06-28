import MovieCard from "../components/moviecard"
import {useState} from "react"

function Home(){

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id:1, title:"John Wick", release: "2020"},
        {id:1, title:"Terminator", release: "1999"},
        {id:1, title:"The Matrix", release: "1998"}, 
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("..Search for movies..")
    }

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input 
                  type="text" 
                  placeholder="..Search for movies.." 
                  className="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                    ))}
            </div>

        </div>
    )
}

export default Home