
function MovieCard({movie}){
    function onFavClick(){
        alert("clicked");
    }
    return(
        <>
    <div className="moviecard">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movieoverlay">
                <button className="fav-btn" onClick={onFavClick}>❤︎</button>
            </div>
        </div>
        <div className="movieINFO">
            <h3>{movie.title}</h3>
            <p>{movie.release}</p>
        </div>
    </div>
    </>
    )
    
}

export default MovieCard