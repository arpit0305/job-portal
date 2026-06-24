import JobCard from "./components/JobCard";

function App() {
  return (
    <div>
      <h1>Job Portal</h1>
      <JobCard
      title="Frontend Developer"
      company="Google"
      type="Remote"
    />
    </div>
  );
}

export default App;