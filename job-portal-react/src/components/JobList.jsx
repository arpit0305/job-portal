import { useState } from 'react';

function JobList({ jobs }) {
  const [query, setQuery] = useState('');

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search jobs..."
      />
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company_name}</p>
        </div>
      ))}
    </div>
  );
}

export default JobList;