"use strict";
window.addEventListener('load', () => {
    const formContainer = document.querySelector(".taskform");
    // let uncompletedDiv = document.querySelector<HTMLDivElement>(".uncompletedDiv");
    // if ($(".uncompletedDiv").text().length ==0){
    //     alert("no items in div");
    // }
    const task = document.querySelector(".task");
    const description = document.querySelector(".description");
    const due = document.querySelector(".deadline");
    // uncompletedTodo class
    class uncompletedTodo {
        constructor(taskTitle, taskDescription, deadline, complete = true) {
            this.taskTitle = taskTitle;
            this.taskDescription = taskDescription;
            this.deadline = deadline;
            this.complete = complete;
        }
        isComplete() {
            if (this.complete === true) {
                Pending();
            }
            else {
                markDone();
            }
        }
    }
    // definition of arrays
    const pendingTasklist = [];
    const completedTaskList = [];
    formContainer.addEventListener("submit", (e) => {
        e.preventDefault();
        let datainputs = task.value && description.value && due.value;
        if (!datainputs) {
            console.log("some task details missing");
        }
        else {
            let newTask = new uncompletedTodo(`${task.value}`, `${description.value}`, `${due.value}`);
            pendingTasklist.push(newTask);
            newTask.isComplete();
            // Pending()                  
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
        check.checked = uncompletedTodo.prototype.complete;
        const btndelete = document.createElement("button");
        btndelete.textContent = "delete";
        const btnupdate = document.createElement("button");
        btnupdate.textContent = "update";
        const markAsDone = document.createElement("button");
        markAsDone.textContent = "Mark As Done";
        markAsDone.setAttribute('onclick', `markDone()`);
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
        taskDetails.appendChild(markAsDone);
        let uncompletedDiv = document.querySelector(".uncompletedDiv");
        uncompletedDiv.appendChild(taskDetails);
    }
});
