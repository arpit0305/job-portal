import { useState } from 'react';
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";

function App() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <h1>Job Portal</h1>
      <FilterBar query={query} onQueryChange={setQuery} />
      <JobList query={query} />
    </div>
  );
}

export default App;