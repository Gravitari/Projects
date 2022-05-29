// FIX THE CSS BTN 
// WRITE CODE
//`<li class="task-text">${counter}. ${taskInput.value}</li>`
let taskList = []
let counter = 0

const taskInput = document.getElementById("input-task-text")
const commitbtn = document.getElementById("commit-btn")
const tasks = document.getElementById("tasks-list")



commitbtn.addEventListener("click", function(){
    taskList.push(`<li class="task-text">${counter+1}. ${taskInput.value}</li>`)
    tasks.innerHTML += taskList[0]
    counter+=1
    taskList = []
    taskInput.value = ''
})

