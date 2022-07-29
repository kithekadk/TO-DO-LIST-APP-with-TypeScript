"use strict";
window.addEventListener('load', () => {
    const formContainer = document.querySelector(".taskform");
    const task = document.querySelector(".task");
    const description = document.querySelector(".description");
    const due = document.querySelector(".deadline");
    const checkdiv1 = document.querySelector(".uncompletedDiv");
    const checkdiv2 = document.querySelector(".completedDiv");
    function checkIFEmpty() {
        if (checkdiv1.firstChild) {
            const disclaimer = document.createElement("p");
            disclaimer.textContent = "No Tasks Available Currently!";
            checkdiv1.appendChild(disclaimer);
        }
    }
    checkIFEmpty();
    // uncompletedTodo class
    class uncompletedTodo {
        constructor(taskTitle = task.value, taskDescription = description.value, deadline = due.value, complete) {
            this.taskTitle = taskTitle;
            this.taskDescription = taskDescription;
            this.deadline = deadline;
            this.complete = complete;
        }
        isComplete() {
            if (this.complete === false) {
                Pending();
            }
        }
    }
    class completedTodo {
        constructor(taskTitle = task.value, taskDescription = description.value, deadline = due.value, complete) {
            this.taskTitle = taskTitle;
            this.taskDescription = taskDescription;
            this.deadline = deadline;
            this.complete = complete;
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
            let newTask = new uncompletedTodo(task.value, description.value, due.value, false);
            pendingTasklist.push(newTask);
            newTask.isComplete();
            task.value = "";
            description.value = "";
            due.value = "";
        }
    });
    function deleteTask(index) {
        pendingTasklist.splice(index, 1);
        Pending();
    }
    function UpCert(index) {
        if (index !== undefined) {
            task.value = pendingTasklist[index].taskTitle;
            description.value = pendingTasklist[index].taskDescription;
            due.value = pendingTasklist[index].deadline;
            const btnsubmit = document.querySelector(".submit");
            pendingTasklist.splice(index, 1);
            btnsubmit.addEventListener("click", () => {
                if (index !== undefined) {
                    pendingTasklist[index].taskTitle = task.value;
                    pendingTasklist[index].taskDescription = description.value;
                    pendingTasklist[index].taskTitle = due.value;
                }
                else {
                    let newTask = new uncompletedTodo(task.value, description.value, due.value, false);
                    pendingTasklist.push(newTask);
                    task.value = "";
                    description.value = "";
                    due.value = "";
                }
            });
        }
        else {
            console.log("task doesnt exist");
        }
    }
    // Completed tasks function
    function Pending() {
        const taskItem = document.querySelector(".uncompletedDiv");
        while (taskItem.hasChildNodes()) {
            taskItem.removeChild(taskItem.firstChild);
        }
        pendingTasklist.forEach(({ taskTitle, taskDescription, deadline }, index) => {
            const duty = document.createElement("p");
            duty.textContent = taskTitle;
            const descp = document.createElement("p");
            descp.textContent = taskDescription;
            const duep = document.createElement("p");
            duep.textContent = deadline;
            const check = document.createElement("input");
            check.type = "checkbox";
            check.checked = false;
            check.addEventListener("click", () => {
                MarkasRead(index);
                Pending();
            });
            const btndelete = document.createElement("button");
            btndelete.textContent = "delete";
            btndelete.addEventListener('click', () => {
                deleteTask(index);
            });
            const btnupdate = document.createElement("button");
            btnupdate.textContent = "update";
            btnupdate.addEventListener('click', () => {
                UpCert(index);
            });
            const buttonsdiv = document.createElement('p');
            buttonsdiv.appendChild(btndelete);
            buttonsdiv.appendChild(btnupdate);
            //container of all tasks created in this function
            const taskDetails = document.createElement("div");
            const checklabel = document.createElement("label");
            checklabel.textContent = "Completed? ";
            checklabel.appendChild(check);
            taskDetails.appendChild(duty);
            taskDetails.appendChild(descp);
            taskDetails.appendChild(duep);
            taskDetails.appendChild(checklabel);
            taskDetails.appendChild(buttonsdiv);
            let uncompletedDiv = document.querySelector(".uncompletedDiv");
            uncompletedDiv.appendChild(taskDetails);
        });
    }
    // Called by the checkbox
    function MarkasRead(index) {
        let taskOut = pendingTasklist[index];
        completedTaskList.push(taskOut);
        const titleOut = document.createElement("p");
        titleOut.textContent = pendingTasklist[index].taskTitle;
        const descOut = document.createElement("p");
        descOut.textContent = pendingTasklist[index].taskDescription;
        const deadlineOut = document.createElement("p");
        deadlineOut.textContent = pendingTasklist[index].deadline;
        // deadline calculation
        const duewhen = new Date(deadlineOut.textContent);
        const submitNow = new Date();
        const metdeadline = (Math.abs(duewhen.getTime())) - (submitNow.getTime());
        const theDays = (metdeadline / (1000 * 60 * 60 * 24));
        const checkdeadline = document.createElement("p");
        checkdeadline.textContent = (`Task completed ${theDays} day(s) early`);
        function roundNumber(num, decimal_digit) {
            let powerOften = Math.pow(10, decimal_digit);
            let result = Math.round(num * powerOften) / powerOften;
            checkdeadline.textContent = (`Task completed ${result} day(s) early`);
        }
        roundNumber(theDays, 1);
        const btndelete2 = document.createElement("button");
        btndelete2.textContent = "delete";
        btndelete2.style.padding = "5px";
        btndelete2.addEventListener('click', () => {
            btndelete2.parentElement.parentElement.removeChild(listname);
        });
        pendingTasklist.splice(index, 1);
        const listname = document.createElement("div");
        listname.style.border = "solid 4px white";
        listname.style.margin = "5px";
        listname.style.padding = "10px";
        listname.appendChild(titleOut);
        listname.appendChild(descOut);
        listname.appendChild(deadlineOut);
        listname.appendChild(checkdeadline);
        listname.appendChild(btndelete2);
        const completedDiv = document.querySelector(".completedDiv");
        completedDiv.appendChild(listname);
        taskOut.isComplete();
    }
});
