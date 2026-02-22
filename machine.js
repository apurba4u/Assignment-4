function showOnly(id) {
  const interview = document.querySelector("#interview")
  const all = document.querySelector("#all")
  const rejected = document.querySelector("#rejected")
  
  // shobai k hide kore dao
  interview.classList.add('hidden')
  all.classList.add('hidden')
  rejected.classList.add('hidden')

  // id wala ta ke show koro tumi
  const selected = document.querySelector(`#${id}`);
  selected.classList.remove('hidden')
}
function createJob(jobsArray) {
  const section = document.getElementById("all");
  section.innerHTML = "";

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

