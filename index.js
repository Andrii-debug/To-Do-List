const button = document.querySelector(".btn-add");
const input = document.querySelector(".todo_input");
const task = document.querySelector(".task");
const btnSave = document.querySelector(".btn-save");
const ClearBtn = document.querySelector(".btn-clear");

let tasks = [];


function loadTodos() {
  const data = JSON.parse(localStorage.getItem("task"));

  if (data) {
    for (let i = 0; i < data.length; i++) {
      let render = data[i];
      function returnEL() {
        let li = document.createElement("li");
        let b1 = document.createElement("button");

        li.className = "case";
        li.textContent = render;
           
        b1.className = "btn";
        b1.innerHTML = "";

        task.appendChild(li);
        li.appendChild(b1);

        tasks.push(render); // тут вставили очередной элемент
        let task_index = tasks.length - 1; // узнаем его индекс по длине массива, так как он в текущей ситуации последний
        // несколько строк спустя
        b1.addEventListener("click",  (function(inner_task_index)  { // функция-обертка для изоляции контекста, сюда передается значение task_index, я специально выделил его другим именем inner_task_index, чтобы видеть контекст функции-обертки
    
        // обертка возвращает функцию-обработчик события  для addEventListener
        return function delFromLocalSt() {
            task.removeChild(li);
                let array = JSON.parse(localStorage.getItem('task'));
                array.splice(inner_task_index, 1); // удаляем элемент по известному индексу используя механизм замыкания, используя контекст функции обертки
            localStorage.setItem('task', JSON.stringify(array));
            location.reload()
           }
          
        })
        (task_index) // вызываем хитрую обертку, чтобы обеспечить изоляцию переменной от контекста функции createEl
        
        );

       

        li.addEventListener("click", () => {
          li.classList.toggle("case-active");
        });
      }
      returnEL();
    }
  }
}

//////////////////// listenners ///////////////

button.addEventListener("click", function addTask() {
  if (input.value === "") {
    alert("Write a task");
  } else {
    createEl();
    input.value = "";
    localStorage.setItem("task", JSON.stringify(tasks));
  }
});

ClearBtn.addEventListener("click", function Clear() {
  task.innerHTML = "";
  tasks = []
  localStorage.removeItem("task", task);
});

input.addEventListener("keypress", function pressEnter(e) {
  if (e.key === "Enter") {
    if (input.value === "") {
      alert("Write a task");
    } else {
      createEl();
      input.value = "";
      localStorage.setItem("task", JSON.stringify(tasks));
     
    }
  }
});

///////////////////////////////////////////////

function createEl(data) {
  let li = document.createElement("li");
  let b1 = document.createElement("button");
  data = input.value;

  li.className = "case";
  li.textContent = data;
  b1.className = "btn";
  b1.innerHTML = "";

  task.appendChild(li);
  li.appendChild(b1);

    tasks.push(data); // тут вставили очередной элемент
    let task_index = tasks.length - 1; // узнаем его индекс по длине массива, так как он в текущей ситуации последний
    // несколько строк спустя
    b1.addEventListener("click",  (function(inner_task_index)  { // функция-обертка для изоляции контекста, сюда передается значение task_index, я специально выделил его другим именем inner_task_index, чтобы видеть контекст функции-обертки

    // обертка возвращает функцию-обработчик события  для addEventListener
    return function delFromLocalSt() {
        task.removeChild(li);
            let array = JSON.parse(localStorage.getItem('task'));
            array.splice(inner_task_index, 1); // удаляем элемент по известному индексу используя механизм замыкания, используя контекст функции обертки
        localStorage.setItem('task', JSON.stringify(array));
        // location.reload()
       }
    })
    (task_index) // вызываем хитрую обертку, чтобы обеспечить изоляцию переменной от контекста функции createEl
    
    );

  li.addEventListener("click", () => {
    li.classList.toggle("case-active");
  })

}

loadTodos()