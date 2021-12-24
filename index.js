const button = document.querySelector('.btn-1');
const input = document.querySelector('.todo_input');
const task = document.querySelector('.task')
const btnSave = document.querySelector('.btn__save')
const ClearBtn = document.querySelector('.btn__clear')

function loadTodos() {
    const data = localStorage.getItem('task')
    if (data) {
        task.innerHTML = data;
    }
 
}
//////////////////// listenners ///////////////

button.addEventListener('click', function addTask() {
    if (input.value === '') {
        alert('Write a task')
    } else {     
        createEl()
        input.value = ''
    }
})

btnSave.addEventListener('click', function Save() {
    localStorage.setItem('task', task.innerHTML)
})


ClearBtn.addEventListener('click', function Clear() {
    task.innerHTML = ''
    localStorage.removeItem('task', task)
})

input.addEventListener('keypress', function pressEnter(e) {
    if (e.key === 'Enter') {
        if (input.value === '') {
            alert('Write a task')
        } else {     
            createEl()
            input.value = ''
        }
    }
});

window.addEventListener('load', loadTodos)

///////////////////////////////////////////////

function createEl() {
    
    let li = document.createElement('li')
    let b1 = document.createElement('button') 


     li.className = 'case';
     li.textContent = input.value;
     
     b1.className = 'btn';
     b1.innerHTML = '';

    task.appendChild(li);
    li.appendChild(b1);
     

     b1.addEventListener('click', () => {
        task.removeChild(li)
         
     })

     li.addEventListener('click', () => {
        li.classList.toggle('case-active')
       
     })

}

