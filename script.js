// DOM selection //

const jobTitleInput = document.getElementById('job-title');
const jobTypeSelect = document.getElementById('job-type');
const searchForm = document.querySelector('search-form');

const jobContainer = document.querySelector('#job-container');

const jobs = [
    {
        title: 'Frontend Developer',
        company: 'TechNova',
        location: 'Bangalore, India',
        type: 'Full-time',
        description: 'Looking for a frontened developer with HTML, CSS andJavascript skills.'
    },
    {
         title:   'DevOps Engineer',
        company: 'CloudBase',
        location:'Remote',
        type:    'Full-Time',
        description: 'Manage CI/CD pipelines and cloud infrastructure.'
    },
    {
        title:   'Mobile Developer',
        company: 'AppWorks',
        location:'Delhi, India',
        type:    'Hybrid',
        description: 'Build cross-platform apps using React Native.'
    },
    {
        title:   'Backend Developer',
        company: 'CodeCraft',
        location:'Hyderabad, India',
        type:    'Remote',
        description: 'Experience with Node.js and databases.'
    },
    {
        title:   'Data Analyst',
        company: 'DataMind',
        location:'Pune, India',
        type:    'Full-Time',
        description: 'Analyze business data and generate insights.'
    },
    {
        title:   'UI/UX Designer',
        company: 'Pixel Studio',
        location:'Mumbai, India',
        type:    'Hybrid',
        description: 'Create user-friendly and modern interfaces.'
    },
    
]

// renderJobs - takes an array of job objects and builds cards on the page
function renderJobs(jobsList) {

    //cleared the container before rendering
    
    jobContainer.innerHTML = '';
    jobList.forEach(job => {

        //created a blank <article> element
        const card = document.createElement('article');
        card.className = 'job-card';

        // filled it with content using a template literal
        card.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Type:</strong> ${job.type}</p>
            <p>${job.description}</p>
            <button>Apply Now</button>
        `;

        // drop the finished card into the grid
        jobContainer.appendChild(card);
    })

    // if no jobs matched, show a message
    if (jobList.length === 0) {
        jobContainer.innerHTML = '<p style="color: #555;">No jobs found.Try a different search.</p>';
    }

}

// render all jobs on page load
renderJobs(jobs);