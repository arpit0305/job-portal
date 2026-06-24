function JobCard(props) {
    return (
        <div className ="job-card">
            <h2>{props.title}</h2>
            <p>{props.company}</p>
            <p>{props.type}</p>

        </div>
    );
}

export default JobCard;