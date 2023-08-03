document.addEventListener("DOMContentLoaded", () => {
  const todo = document.querySelector("#create-task-form")
  todo.addEventListener('submit',(e)=>{
    e.preventDefault()
    const priority = e.target['select'].value
    const newTodo = e.target['new-task-description'].value
    //create new element for todo
    const addTodo = document.createElement('p')
    // add color to todo
    if(priority === 'High'){
      addTodo.className = 'high'
    } else if (priority === 'Medium'){
      addTodo.className = 'medium'
    } else {
      addTodo.className = 'low'
    }
    const btn = document.createElement('button')
    const edit = document.createElement('button')
    edit.textContent = 'Edit'
    //create delete button
    addTodo.textContent = newTodo
    btn.textContent = 'DELETE!!!'
    const list = document.querySelector('#tasks')
    //append to DOM
    list.appendChild(addTodo)
    addTodo.appendChild(btn)
    addTodo.appendChild(edit)
    // delete functionality
    btn.addEventListener('click', ()=>{
      btn.parentElement.remove()
    })
    const mainContent = document.querySelector('#main-content')
    edit.addEventListener('click',()=>{
      const editForm = document.createElement('form')
      const editInput = document.createElement('input')
      const editInputBtn = document.createElement('input')
      editInputBtn.type = "submit"
      editInputBtn.value = "Edit"
      editForm.appendChild(editInputBtn)
      addTodo.append(editForm,editInput)
    })
    
    

  })
})
