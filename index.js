const button = document.querySelector('.btn-1');
const input = document.querySelector('.todo_input');
const task = document.querySelector('.task')

button.addEventListener('click', function addTask() {
    if (input.value === '') {
        alert('Write a task')
    } else {     
        createEl()
        input.value = ''
    }
})


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

