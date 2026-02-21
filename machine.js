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