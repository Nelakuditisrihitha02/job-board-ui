function JobCard({ job, onSelect }) {
  return (
    <div className="job-card glass" onClick={onSelect}>
      <h3>{job.title}</h3>
      <p className="company">{job.company}</p>
      <p className="location">{job.location}</p>
      <p className="salary">💰 {job.salary}</p>
      <span className="badge">{job.type}</span>
    </div>
  );
}

export default JobCard;   // ✅ THIS MUST EXIST
