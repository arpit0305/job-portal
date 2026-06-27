import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";
import JobDetail from "./pages/JobDetail";

function App() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <h1>Job Portal</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FilterBar query={query} onQueryChange={setQuery} />
              <JobList query={query} />
            </>
          }
        />
        <Route path="/jobs/:id" element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;