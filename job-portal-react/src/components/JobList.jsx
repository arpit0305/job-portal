import { useState, useEffect } from 'react';
import JobCard from './JobCard';

function JobList() {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [savedIds, setSavedIds] = useState(new Set());

  useEffect(() => {
    fetch('https://remotive.com/api/remote-jobs')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, []);

  const handleToggleSave = (id) => {
    setSavedIds((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  if (isLoading) return <p>Loading jobs...</p>;
  if (hasError) return <p>Something went wrong. Please try again.</p>;

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
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company_name}
            type={job.job_type}
            isSaved={savedIds.has(job.id)}
            onToggleSave={handleToggleSave}
            id={job.id}
          />
        ))
      )}
    </div>
  );
}

export default JobList;