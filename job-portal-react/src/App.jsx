import JobList from "./components/JobList";

const jobs = [
    {id: 1, title: "Frontend Developer", company: "Google", type: "Remote"},
    {id: 2, title: "Backend Engineer", company: "Amazon", type: "Full-time"},
    {id: 3, title: "UI Designer", company: "Figma", type: "Remote"},
];

function App() {
  return (
    <div>
      <h1>Job Portal</h1> 
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;