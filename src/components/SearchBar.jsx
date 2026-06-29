import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="...Search movies..."
      />
      <p>You typed: {query}</p>
    </div>
  );
}

export default SeacrchBar;