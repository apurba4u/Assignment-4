function showOnly(id) {
  const interview = document.querySelector("#interview");
  const all = document.querySelector("#all");
  const rejected = document.querySelector("#rejected");

  interview.classList.add("hidden");
  all.classList.add("hidden");
  rejected.classList.add("hidden");

  const selected = document.querySelector(`#${id}`);
  selected.classList.remove("hidden");

  if (id === "all") {
    document.querySelector("#cnt1").textContent = `${jobs.length} jobs`;
  }

  if (id === "interview") {
    document.querySelector("#cnt1").textContent = `${interviewJobs.length} of ${jobs.length} jobs`;
  }

  if (id === "rejected") {
    document.querySelector("#cnt1").textContent = `${rejectedJobs.length} of ${jobs.length} jobs`;
  }
}
function createJob(jobsArray) {
  const section = document.getElementById("all");
  section.innerHTML = "";

  if (!jobsArray || jobsArray.length === 0) {
    showEmpty("all");
    return;
  }

  jobsArray.forEach((job) => {
    const card = document.createElement("div");
    card.className = "w-full my-4 bg-white p-6";

    card.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-[26px] font-bold mb-1 text-[#002C5C]">
            ${job.company}
          </h2>
          <p class="text-[#64748B] text-[22px]">
            ${job.role}
          </p>
        </div>
        <div class="delete-btn cursor-pointer" data-id="${job.id}">
          <i class="ri-delete-bin-6-line rounded-full"></i>
        </div>
      </div>

      <p class="text-[#64748B] text-[20px] my-5">
        ${job.location} • ${job.type} • ${job.salary}
      </p>

      <div class="w-[113px] h-9 bg-[#EEF4FF] rounded flex justify-center items-center font-semibold text-[14px] text-[#002C5C]">
        ${job.status}
      </div>

      <p class="text-[#323B49] text-[20px] my-5">
        ${job.description}
      </p>

      <div class="w-[232px] flex justify-between">
        <button class="interview-btn btn btn-outline btn-accent" data-id="${job.id}">
          INTERVIEW
        </button>

        <button class="reject-btn btn btn-outline btn-error" data-id="${job.id}">
          REJECTED
        </button>
      </div>
    `;

    section.appendChild(card);
  });
}
function showEmpty(sectionId) {
  const section = document.getElementById(sectionId);

  section.innerHTML = `
    <div id="common" class="text-center my-10 py-26">
      <div class="w-full flex justify-center">
        <img src="./jobs.png" alt="">
      </div>
      <h2 class="font-semibold text-[32px] text-[#002C5C]">
        No jobs available
      </h2>
      <p class="text-[22px] text-[#64748B]">
        Check back soon for new job opportunities
      </p>
    </div>
  `;
}
function createInterview() {
  const section = document.getElementById("interview");

  if (interviewJobs.length === 0) {
    showEmpty("interview");
    return;
  }

  section.innerHTML = "";

  interviewJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "w-full my-4 bg-white p-6 bg-white";

    card.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-[26px] font-bold mb-1 text-[#002C5C] text-left">
            ${job.company}
          </h2>
          <p class="text-[#64748B] text-[22px]">
            ${job.role}
          </p>
        </div>
        <div class="delete-btn cursor-pointer" data-id="${job.id}">
        </div>
      </div>

      <p class="text-[#64748B] text-[20px] my-5 text-left">
        ${job.location} • ${job.type} • ${job.salary}
      </p>

      <div class="w-[113px] h-9 bg-[#EEF4FF] rounded flex justify-center items-center font-semibold text-[14px] text-[#002C5C]">
        ${job.status}
      </div>

      <p class="text-[#323B49] text-[20px] my-5 text-justify">
        ${job.description}
      </p>

      <div class="flex gap-3">
  <button class="interview-btn btn btn-outline btn-accent" data-id="${job.id}">
    INTERVIEW
  </button>

  <button class="reject-btn btn btn-outline btn-error" data-id="${job.id}">
    REJECTED
  </button>
</div>
    `;

    section.appendChild(card);
  });
}
function createRejected() {
  const section = document.getElementById("rejected");

  if (rejectedJobs.length === 0) {
    showEmpty("rejected");
    return;
  }

  section.innerHTML = "";

  rejectedJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "w-full my-4 bg-white p-6 bg-white";

    card.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-[26px] font-bold mb-1 text-[#002C5C] text-left">
            ${job.company}
          </h2>
          <p class="text-[#64748B] text-[22px]">
            ${job.role}
          </p>
        </div>
        <div class="delete-btn cursor-pointer" data-id="${job.id}">
        </div>
      </div>

      <p class="text-[#64748B] text-[20px] my-5 text-left">
        ${job.location} • ${job.type} • ${job.salary}
      </p>

      <div class="w-[113px] h-9 bg-[#EEF4FF] rounded flex justify-center items-center font-semibold text-[14px] text-[#002C5C]">
        ${job.status}
      </div>

      <p class="text-[#323B49] text-[20px] my-5 text-justify">
        ${job.description}
      </p>

      <div class="flex gap-3">
  <button class="interview-btn btn btn-outline btn-accent" data-id="${job.id}">
    INTERVIEW
  </button>

  <button class="reject-btn btn btn-outline btn-error" data-id="${job.id}">
    REJECTED
  </button>
</div>
    `;

    section.appendChild(card);
  });
}