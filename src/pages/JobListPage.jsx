import { useState } from "react";
import jobs from "../data/jobs.json";
import JobCard from "../components/JobCard";
import JobFilter from "../components/JobFilter";
import JobModal from "../components/JobModal";

function JobListPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobs.filter((job) => {
    const matchTitle = job.title.toLowerCase().includes(search.toLowerCase());
    const matchType = type === "All" || job.type === type;
    return matchTitle && matchType;
  });

  return (
    <div className="page-container">
      <JobFilter
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
      />

      <div className="job-grid">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onSelect={() => setSelectedJob(job)}
          />
        ))}
      </div>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

export default JobListPage;
