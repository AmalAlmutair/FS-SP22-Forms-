//react
import React from "react";

//mobx
import { observer } from "mobx-react";

//compomnents
import TaskItem from "./TaskItem";

//stores
import taskStore from "../stores/taskStore";

function TasksList() {
  const tasksList = taskStore.tasks.map((task) => <TaskItem task={task} />);

  return (
    <div class="row">
      <div class="col-md-12">
        <div class="main-todo-input-wrap">
          <div class="task-form  fl-wrap todo-listing">
            <ul id="list-items">{tasksList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(TasksList);
