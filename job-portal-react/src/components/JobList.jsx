import JobCard from "./JobCard";

function JobList({jobs}) {
    return (
        <div className="job-list">
            {jobs.map((job) => (
                <JobCard
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    type={job.type}
                />  
            ))}
        </div>
    );

}

export default JobList;