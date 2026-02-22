let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    status: "NOT APPLIED",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    actions: ["INTERVIEW", "REJECTED"]
  },
  {
    id: 2,
    company: "WebFlow Agency",
    role: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    status: "NOT APPLIED",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    actions: ["INTERVIEW", "REJECTED"]
  },
  {
    id: 3,
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    status: "NOT APPLIED",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    actions: ["INTERVIEW", "REJECTED"]
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    role: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    status: "NOT APPLIED",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    actions: ["INTERVIEW", "REJECTED"]
  },
  {
    id: 5,
    company: "Innovation Labs",
    role: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    status: "NOT APPLIED",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    actions: ["INTERVIEW", "REJECTED"]
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    role: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    status: "NOT APPLIED",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    actions: ["INTERVIEW", "REJECTED"]
  },
  {
    id: 7,
    company: "StartupXYZ",
    role: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    status: "NOT APPLIED",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    actions: ["INTERVIEW", "REJECTED"]
  },
  {
    id: 8,
    company: "TechCorp Industries",
    role: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    status: "NOT APPLIED",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    actions: ["INTERVIEW", "REJECTED"]
  }
];

let interviewJobs = [];
let rejectedJobs = [];

function updateJobCount() {
  document.querySelector("#cnt1").textContent = `${jobs.length} jobs`;
}
document.getElementById("all").addEventListener("click", function (e) {

  const deleteBtn = e.target.closest(".delete-btn");
  const interviewBtn = e.target.closest(".interview-btn");
  const rejectBtn = e.target.closest(".reject-btn");

  // Delete Button
  if (deleteBtn) {
    const id = Number(deleteBtn.dataset.id);

    // main jobs teke remove korlam
    const index = jobs.findIndex(j => j.id === id);
    if (index !== -1) jobs.splice(index, 1);

    // interviewJobs teikkao
    const iIndex = interviewJobs.findIndex(j => j.id === id);
    if (iIndex !== -1) interviewJobs.splice(iIndex, 1);

    // rejectedJobs teikkao
    const rIndex = rejectedJobs.findIndex(j => j.id === id);
    if (rIndex !== -1) rejectedJobs.splice(rIndex, 1);

    createJob(jobs);
    updateJobCount();
  }

  // InterView Button
  if (interviewBtn) {
    const id = Number(interviewBtn.dataset.id);
    const job = jobs.find(j => j.id === id);

    if (job) {
      job.status = "INTERVIEW";

      const rIndex = rejectedJobs.findIndex(j => j.id === id);
      if (rIndex !== -1) rejectedJobs.splice(rIndex, 1);

      if (!interviewJobs.some(j => j.id === id)) {
        interviewJobs.push(job);
      }

      createJob(jobs);
    }
  }

  // Rejected Button
  if (rejectBtn) {
    const id = Number(rejectBtn.dataset.id);
    const job = jobs.find(j => j.id === id);

    if (job) {
      job.status = "REJECTED";

      const iIndex = interviewJobs.findIndex(j => j.id === id);
      if (iIndex !== -1) interviewJobs.splice(iIndex, 1);

      if (!rejectedJobs.some(j => j.id === id)) {
        rejectedJobs.push(job);
      }

      createJob(jobs);
    }
  }

});
document.querySelector("#cnt1").textContent = `${jobs.length} jobs`
createJob(jobs)
updateJobCount();
console.log(jobs.length);