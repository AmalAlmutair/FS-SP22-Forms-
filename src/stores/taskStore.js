import { makeAutoObservable } from "mobx";

import tasks from "../tasks";
class TaskStore {
  tasks = tasks;
  constructor() {
    makeAutoObservable(this);
  }

  // add new task
  addTask = (task) => {
    task.id = this.tasks[this.tasks.length - 1].id + 1;
    this.tasks.push(task);
  };

  //update task
  updateTask = (updatedTask) => {
    this.tasks = this.tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
  };

  //delete task
  deleteTask = (taskId) => {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  };
}

const taskStore = new TaskStore();
export default taskStore;
