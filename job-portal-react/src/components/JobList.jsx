import JobCard from "./JobCard";

const jobs = [
    {id: 1, title: "Frontend Developer", company: "Google", type: "Remote"},
    {id: 2, title: "Backend Engineer", company: "Amazon", type: "Full-time"},
    {id: 3, title: "UI Designer", company: "Figma", type: "Remote"},
];

function JobList() {
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