import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  
  const [tasks, setTasks] = useState([])
  const [editHidden, setEdithidden] = useState(false)
  const onCreate =  (title,task) => {
      
      const taskObject = [...tasks,{title,task}]
      setTasks(taskObject)
     
  }
   const handleDelete=(Key)=>{
    
    setTasks(tasks.filter((element,index)=>index!==parseInt(Key)))
  }
  const onUpdate=(Key,title,task)=>{
    const newTasks = []
    tasks.forEach((element,index)=>{
      if(index===parseInt(Key)){
        newTasks.push({title,task})
      }else{
        newTasks.push(element)
      }
    })
    setTasks(newTasks)
    setEdithidden(!editHidden)
  }

  

  return (
    <div className="App">
      <TaskCreate onCreate={onCreate}/>
      <TaskList editHidden={editHidden}  onUpdate={onUpdate}  handleDelete={handleDelete} tasks={tasks} />
    
   </div>
   
  );
}

export default App;
