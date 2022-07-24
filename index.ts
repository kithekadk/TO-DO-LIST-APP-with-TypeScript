window.addEventListener('load' , () =>{

const formContainer =document.querySelector<HTMLFormElement>(".taskform");
const task =document.querySelector<HTMLInputElement>(".task");
const description =document.querySelector<HTMLInputElement>(".description");
const due =document.querySelector<HTMLInputElement>(".deadline");

formContainer.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    let datainputs= task.value && description.value && due.value ;
        if (!datainputs){
            console.log("some task details missing");
        } else{

            class uncompletedTodo {
                constructor (
                    public taskTitle: string = `task Title:${task.value}`,
                    public taskDescription: string = `Task description ${description.value}`,
                    public deadline: string = `Deadline: ${due.value}`,
                    ){}
                
                uncompleted(){
                    return this.taskTitle, 
                    this.taskDescription,
                    this.deadline;
                }  
            }

            const newTask = new uncompletedTodo (`${task.value}`, 
                                                `${description.value}`,
                                                `${due.value}`)

            const pendingTasklist: uncompletedTodo[] = [];
            pendingTasklist.push(newTask);
            console.log(pendingTasklist);
            

       }
})

})