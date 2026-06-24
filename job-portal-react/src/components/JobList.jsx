import { useState } from 'react';

function JobList({ jobs }) {
  const [query, setQuery] = useState('');

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search jobs..."
      />

      {filteredJobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        filteredJobs.map((job) => (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company_name}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default JobList;