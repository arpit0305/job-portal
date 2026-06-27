import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function jobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch('https://remotive.com/api/remote-jobs')
      .then((res) => res.json())
      .then((data) => {
        const found = data.jobs.find((j) => String(j.id) === id);
        if (found) {
          setJob(found);
        } else {
          setHasError(true);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Loading job details...</p>;
  if (hasError) return <p>Job not found.</p>;

  return (
    <div>
      <Link to="/">← Back to Jobs</Link>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company_name}</p>
      <p><strong>Type:</strong> {job.job_type}</p>
      <p><strong>Category:</strong> {job.category}</p>
      <a href={job.url} target="_blank" rel="noreferrer">
        Apply Now
      </a>
    </div>
  );
}

export default jobDetail;