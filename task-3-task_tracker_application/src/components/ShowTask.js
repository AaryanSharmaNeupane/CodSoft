import React from "react";

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleDelete = (id) => {
    const updatedTask = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTask);
  };

  const handleEdit = (id) => {
    const selectedTask = taskList.find((t) => t.id === id);

    setTask({
      id: selectedTask.id,
      name: selectedTask.name,
      time: selectedTask.time,
    });
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Tasks</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEdit(task.id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(task.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
