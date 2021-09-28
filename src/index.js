document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    let task = document.querySelector("#new-task-description")
    e.preventDefault()
    console.log(task.value);
    buildToDo(task.value); 
    form.reset()
  })
})

function buildToDo(todo){
  let p = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  p.textContent = `${todo}`
  btn.textContent = ' x'
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove()
}

document.querySelector("#new-task-description")