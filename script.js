function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    if (task === '') {
      alert('Please enter a task.');
      return;
    }
  
    const todoList = document.getElementById('todoList');
  
    const li = document.createElement('li');
    li.className = 'todo-item';
  
    const span = document.createElement('span');
    span.textContent = task;
  
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = function() {
      li.classList.toggle('completed');
    };
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
      todoList.removeChild(li);
    };
  
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
  
    todoList.appendChild(li);
  
    input.value = '';
  }
  