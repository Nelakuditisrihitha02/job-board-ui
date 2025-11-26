function JobFilter({ search, setSearch, type, setType }) {
  return (
    <div className="filter-bar glass">
      <input
        type="text"
        placeholder="Search job title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="All">All</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Internship">Internship</option>
      </select>
    </div>
  );
}

export default JobFilter;
