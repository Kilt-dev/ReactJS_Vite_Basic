import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('All');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  //hàm thêm or update
  const addOrUpdateTask = () => {
    if (isEditing) {
      setTasks(tasks.map((t) => (t.id === currentTaskId ? { ...t, text: task } : t)));
      setIsEditing(false);
      setCurrentTaskId(null);
    } else if (task.trim()) {
       // Nếu không ở chế độ chỉnh sửa và ô nhập không trống, tạo nhiệm vụ mới
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: task,
          completed: false,
          date: new Date().toLocaleString(),
        },
      ]);
    }
    setTask('');// đặt lại dữ liệu rỗng
  };

  //edittask
  const editTask = (id, text) => {
    setTask(text);
    setIsEditing(true);
    setCurrentTaskId(id);
  };

  //đổi trạng thái hoàn thành
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //xóa
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    return filter === 'Completed' ? task.completed : !task.completed;
  });

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className="todo-input">
        <button className="btn-add-task">Add Task</button>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Input"
        />
        <button onClick={addOrUpdateTask} className="btn-add">
          {isEditing ? 'Update' : 'Thêm'}
        </button>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="task-list">
        {filteredTasks.map((task) => (
          <div key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <span className="task-date">{task.date}</span>
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
            <button onClick={() => editTask(task.id, task.text)}>✏️</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
