function JobModal({ job, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal glass">
        <h2>{job.title}</h2>
        <p className="company">{job.company}</p>
        <p className="location">{job.location}</p>

        <p className="desc">{job.description}</p>
        <p><strong>Salary:</strong> {job.salary}</p>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default JobModal;
