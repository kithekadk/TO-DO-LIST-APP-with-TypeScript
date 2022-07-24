window.addEventListener('load' , () =>{

const formContainer =document.querySelector<HTMLFormElement>(".taskform");
const task =document.querySelector<HTMLInputElement>(".task");
const description =document.querySelector<HTMLInputElement>(".description");
const due =document.querySelector<HTMLInputElement>(".deadline");

// uncompletedTodo class
interface common  {
    taskTitle: string,
    taskDescription: string,
    deadline: string,
}
class uncompletedTodo implements common{
    constructor (
        public taskTitle: string ,
        public taskDescription: string ,
        public deadline: string ,
        ){}
     
}
const pendingTasklist: uncompletedTodo[] = [];


formContainer.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    let datainputs= task.value && description.value && due.value ;
        if (!datainputs){
            console.log("some task details missing");

        } else{
            
            pendingTasklist.push(new uncompletedTodo (
                `${task.value}`, 
                `${description.value}`,
                `${due.value}`));
            // console.log(pendingTasklist)
            Pending()                    
            task.value="";
            description.value="";
            due.value="";
              
        }
        
})

function Pending(){
    const duty= document.createElement("p");
    duty.textContent=task.value;

    const descp= document.createElement("p");
    descp.textContent=description.value;

    const duep= document.createElement("p");
    duep.textContent=due.value;

    const taskDetails =document.createElement("div");

    taskDetails.appendChild(duty);
    taskDetails.appendChild(descp);
    taskDetails.appendChild(duep);

    let uncompletedDiv= document.querySelector(".uncompletedDiv")
    uncompletedDiv.appendChild(taskDetails)
}
})

