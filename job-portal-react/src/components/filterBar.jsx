function FilterBar({ query, onQueryChange }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search jobs..."
      />
    </div>
  );
}

export default FilterBar;