function SearchBar({ searchQuery, setSearchQuery }) {
  function search(e) {
    e.preventDefault();
    alert(`Searching for ${searchQuery}`);
  }

  return (
    <form onSubmit={search}>
      <input
        className="input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search movies..."
      />

      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}

export default SearchBar;