function JobCard({ title, company, type }) {
  return (
    <div className="job-card">
      <h2>{title}</h2>
      <p>{company}</p>
      <p>{type}</p>
    </div>
  );
}

export default JobCard;