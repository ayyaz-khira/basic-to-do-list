import { useState } from 'react'
import "./App.css"


function App() {
  const [task,setTask] = useState("");
  const [taskList,setTaskList] = useState([]);

  function addTask(){
    if(task!==""){
    setTaskList([...taskList,task]);
    setTask("");
    }
  }

  function clearList(){
    setTaskList([]);
  }


  return <div >
    <h1>To Do List</h1>

    <ol>
    {taskList.map((element,index)=>{
      return <li key={index}>{element}</li>
    })}
    </ol>



    <input
     
    type='text'
    placeholder='Enter Task'
    value={task}
    onChange={(e)=> setTask(e.target.value)}
    />

    <button id='b1' onClick={addTask} >Add Task</button>
    <button id='b2' onClick={clearList} >Clear List</button>
  </div>

  
    
  
}

export default App
