import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  function search(e) { 
    alert(`Searching for ${query}`);
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="...Search movies..."
        />
        <button type="submit" onClick={search} className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
