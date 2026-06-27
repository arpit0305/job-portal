import { Link } from 'react-router-dom';

function JobCard({ id, title, company, type, isSaved, onToggleSave }) {
  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p>{company}</p>
      <p>{type}</p>
      <button onClick={() => onToggleSave(id)}>
        {isSaved ? 'Saved ✓' : 'Save Job'}
      </button>
      <Link to={`/jobs/${id}`}>View Details</Link>
    </div>
  );
}

export default JobCard;