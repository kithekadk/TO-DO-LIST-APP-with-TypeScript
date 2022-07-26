"use strict";
window.addEventListener('load', () => {
    const formContainer = document.querySelector(".taskform");
    const task = document.querySelector(".task");
    const description = document.querySelector(".description");
    const due = document.querySelector(".deadline");
    // uncompletedTodo class
    class uncompletedTodo {
        constructor(taskTitle, taskDescription, deadline, complete = false) {
            this.taskTitle = taskTitle;
            this.taskDescription = taskDescription;
            this.deadline = deadline;
            this.complete = complete;
        }
        isComplete() {
            if (this.complete === false) {
                Pending();
            }
            else {
                markDone();
            }
        }
    }
    // definition of arrays
    const pendingTasklist = [];
    if (pendingTasklist.length === 0) {
        let defaultText = document.createElement("p");
        defaultText.textContent = "There are no tasks currently!!!";
        let uncompletedTasks = document.querySelector(".uncompletedDiv");
        uncompletedTasks.appendChild(defaultText);
    }
    else {
        let newText = document.createElement("p");
        newText.textContent = "There are no tasks currently!!!";
        let uncompletedTasks = document.querySelector(".uncompletedDiv");
        uncompletedTasks.appendChild(newText);
    }
    const completedTaskList = [];
    formContainer.addEventListener("submit", (e) => {
        e.preventDefault();
        let datainputs = task.value && description.value && due.value;
        if (!datainputs) {
            console.log("some task details missing");
        }
        else {
            let newTask = new uncompletedTodo(task.value, description.value, due.value);
            pendingTasklist.push(newTask);
            newTask.isComplete();
            task.value = "";
            description.value = "";
            due.value = "";
        }
    });
    function markDone() {
        console.log(completedTaskList);
    }
    function Pending() {
        const taskItem = document.querySelectorAll("#uncompletedDiv");
        taskItem.forEach(el => el.remove());
        const duty = document.createElement("p");
        duty.textContent = task.value;
        const descp = document.createElement("p");
        descp.textContent = description.value;
        const duep = document.createElement("p");
        duep.textContent = due.value;
        const check = document.createElement("input");
        check.type = "checkbox";
        check.checked = false;
        check.addEventListener("click", () => {
            let completedList = document.querySelector(".completedList");
            completedList.appendChild(taskDetails);
        });
        const btndelete = document.createElement("button");
        btndelete.textContent = "delete";
        btndelete.addEventListener("click", () => {
            // taskDetails.setAttribute(hi) 
        });
        const btnupdate = document.createElement("button");
        btnupdate.textContent = "update";
        const taskDetails = document.createElement("div");
        const checklabel = document.createElement("label");
        checklabel.textContent = "Completed?";
        checklabel.appendChild(check);
        taskDetails.appendChild(duty);
        taskDetails.appendChild(descp);
        taskDetails.appendChild(duep);
        taskDetails.appendChild(checklabel);
        taskDetails.appendChild(btndelete);
        taskDetails.appendChild(btnupdate);
        let uncompletedDiv = document.querySelector(".uncompletedDiv");
        uncompletedDiv.appendChild(taskDetails);
    }
});
