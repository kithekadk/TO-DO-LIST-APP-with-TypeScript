"use strict";
window.addEventListener('load', () => {
    const formContainer = document.querySelector(".taskform");
    const task = document.querySelector(".task");
    const description = document.querySelector(".description");
    const due = document.querySelector(".deadline");
    formContainer.addEventListener("submit", (e) => {
        e.preventDefault();
        let datainputs = task.value && description.value && due.value;
        if (!datainputs) {
            console.log("some task details missing");
        }
        else {
            class uncompletedTodo {
                constructor(taskTitle = `task Title:${task.value}`, taskDescription = `Task description ${description.value}`, deadline = `Deadline: ${due.value}`) {
                    this.taskTitle = taskTitle;
                    this.taskDescription = taskDescription;
                    this.deadline = deadline;
                }
                uncompleted() {
                    return this.taskTitle,
                        this.taskDescription,
                        this.deadline;
                }
            }
            const newTask = new uncompletedTodo(`${task.value}`, `${description.value}`, `${due.value}`);
            const pendingTasklist = [];
            pendingTasklist.push(newTask);
            console.log(pendingTasklist);
        }
    });
});
