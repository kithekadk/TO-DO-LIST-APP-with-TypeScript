window.addEventListener('load' , () =>{

const formContainer =document.querySelector<HTMLFormElement>(".taskform");
const task =document.querySelector<HTMLInputElement>(".task");
const description =document.querySelector<HTMLInputElement>(".description");
const due =document.querySelector<HTMLInputElement>(".deadline");


// interface used to create the classes
interface toDo  {
    taskTitle: string,
    taskDescription: string,
    deadline: string,
    complete:boolean;
}
// uncompletedTodo class
class uncompletedTodo implements toDo{
    constructor (
        public taskTitle: string =task.value ,
        public taskDescription: string = description.value,
        public deadline: string = due.value,
        public complete=false,
        ){}
    
    isComplete(){
        if(this.complete===false){
            Pending();            
        }else{
            Completed();
        }

    }
}
// definition of arrays
const pendingTasklist: uncompletedTodo[] = [];
const completedTaskList: uncompletedTodo[] = [];

formContainer.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    let datainputs= task.value && description.value && due.value ;
        if (!datainputs){
            console.log("some task details missing");

        } else{
        let newTask =new uncompletedTodo (
            task.value, 
            description.value,
            due.value ); 
            
        pendingTasklist.push(newTask);
       
        newTask.isComplete();
                         
            task.value="";
            description.value="";
            due.value= "";              
        }
        
})

function deleteTask(index:number){
    pendingTasklist.splice(index,1)
    
    Pending()
    Completed()
}

function UpCert(index:number){
    if(index !== undefined){
        
        task.value= pendingTasklist[index].taskTitle;
        description.value= pendingTasklist[index].taskDescription;
        due.value= pendingTasklist[index].deadline;
        
    const btnsubmit= document.querySelector(".submit")
    pendingTasklist.splice(index,1)
    btnsubmit.addEventListener("click", ()=>{
        if(index !== undefined){
            pendingTasklist[index].taskTitle=task.value;
            pendingTasklist[index].taskDescription=description.value;
            pendingTasklist[index].taskTitle=due.value;
        }else{
            let newTask =new uncompletedTodo (
                task.value, 
                description.value,
                due.value ); 
                
            pendingTasklist.push(newTask);
            task.value="";
            description.value="";
            due.value= ""; 
        }
    })  
    }else{
        console.log("cant work")
    }
   
}

function Pending(){
    const taskItem =document.querySelector(".uncompletedDiv")

    while (taskItem.hasChildNodes()) {
        taskItem.removeChild(taskItem.firstChild);
      }

    pendingTasklist.forEach(({taskTitle,
        taskDescription,
        deadline},index:number) => {

        const duty= document.createElement("p");
        duty.textContent=taskTitle;
    
        const descp= document.createElement("p");
        descp.textContent=taskDescription;
    
        const duep= document.createElement("p");
        duep.textContent=deadline;
    
        const check = document.createElement("input");
        check.type="checkbox";
        check.checked=false; 
        check.addEventListener("click", ()=>{
            // let completedDiv= document.querySelector(".completedDiv")
            // completedDiv.appendChild(taskDetails)
            // checklabel.textContent="Task Completed"
            // checklabel.style.color="white";
            // btnupdate.style.visibility="hidden"

            let filterthis = pendingTasklist.filter((el)=>el.complete===true)
            if (filterthis){
                completedTaskList.concat(filterthis)
            }
            Completed();
            pendingTasklist.splice(index,1);
        
            Pending()
           
        })  
    
        const btndelete= document.createElement ("button");
        btndelete.textContent ="delete";
        btndelete.addEventListener('click', () =>{
            deleteTask(index);
        })
    
        const btnupdate= document.createElement ("button");
        btnupdate.textContent ="update";
        btnupdate.addEventListener('click', ()=>{
            UpCert(index)
        })

        const buttonsdiv = document.createElement('p');
        buttonsdiv.appendChild(btndelete)
        buttonsdiv.appendChild(btnupdate)

        const taskDetails =document.createElement("div");

    
        const checklabel = document.createElement("label")
        checklabel.textContent="Completed? "
        checklabel.appendChild(check)
    
        taskDetails.appendChild(duty);
        taskDetails.appendChild(descp);
        taskDetails.appendChild(duep);
        taskDetails.appendChild(checklabel)
        taskDetails.appendChild(buttonsdiv)    
    
        let uncompletedDiv= document.querySelector(".uncompletedDiv")
        uncompletedDiv.appendChild(taskDetails)
    })
}

function Completed(){
    const taskItem =document.querySelector(".completedDiv")

    while (taskItem.hasChildNodes()) {
        taskItem.removeChild(taskItem.firstChild);
      }

    pendingTasklist.forEach(({taskTitle,
        taskDescription,
        deadline},index:number) => {

        const duty= document.createElement("p");
        duty.textContent=taskTitle;
    
        const descp= document.createElement("p");
        descp.textContent=taskDescription;
    
        const duep= document.createElement("p");
        duep.textContent=deadline;

        const warning=document.createElement("p");
        warning.textContent="task already completed";

        const check = document.createElement("input");
        check.type="checkbox";
        check.checked=true; 
        check.addEventListener("click", ()=>{
            let completedDiv= document.querySelector(".completedDiv")
            completedDiv.appendChild(warning)
        })  

        const btndelete= document.createElement ("button");
        btndelete.textContent ="delete";
        btndelete.addEventListener('click', () =>{
            deleteTask(index);
        })
        const taskDetails =document.createElement("div");
    
        taskDetails.appendChild(duty);
        taskDetails.appendChild(descp);
        taskDetails.appendChild(duep);
        taskDetails.appendChild(btndelete);
    
    
        let completedDiv = document.querySelector(".completedDiv")
        completedDiv.appendChild(taskDetails)
    })


}
})



