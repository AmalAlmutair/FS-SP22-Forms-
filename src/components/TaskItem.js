import React, { useState } from "react";

//stores
import taskStore from "../stores/taskStore";

export default function TaskItem({ task }) {
  // to hide and show the update form
  const [isUpdated, setIsUpdated] = useState(false);

  // to hold the value of the updated task
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleChange = (event) => {
    setUpdatedTask({ ...updatedTask, [event.target.name]: event.target.value });
    console.log(updatedTask);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //prevent the form default behavior of reloading the page
    taskStore.updateTask(updatedTask);
    setIsUpdated(false); // to hide the update form. Thank you Hasan!
  };

  // this is dangerous. the user should recieve a confirmation messsage before the delete happens. Btw is a challenge for you guys😍
  const handleDelete = () => {
    taskStore.deleteTask(task.id);
  };

  return (
    <>
      <li>
        <p className="todo-text">
          {task.title}
          <span class="chip info">{task.priority}</span>
          <p className="remove" onClick={handleDelete}>
            Delete
          </p>
          <p
            className="update"
            onClick={() => {
              setIsUpdated(!isUpdated);
            }}
          >
            Update
          </p>
        </p>
      </li>

      {isUpdated && (
        <div>
          <form className="update-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={task.title}
              name="title"
              onChange={handleChange}
            />
            <select
              className="form-select select"
              name="priority"
              onChange={handleChange}
            >
              <option value="">Priority</option>
              <option value="High">High</option>
              <option value="Moderate">Moderate</option>
              <option value="Low">Low</option>
            </select>
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </>
  );
}
