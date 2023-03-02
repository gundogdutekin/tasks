import { useState } from "react"
import TaskCreate from "./TaskCreate"

function TaskShow({editHidden,indexId,deleteItem,task,onUpdate}) {
    const [showedit, setShowedit] = useState(editHidden ? editHidden:false)
    const handleDelete=(e)=>{
        e.preventDefault()
        deleteItem(e.target.value)
        
    }
    const handleEditChange=(e)=>{
        e.preventDefault()
        setShowedit(!showedit)                                         
    }
    const handleSubmit=(id,title,task)=>{
       
        setShowedit(false)
        onUpdate(id,title,task)
    }
    return ( 
        <div className="card"> 
          {showedit ? (
          <TaskCreate onUpdate={handleSubmit} indexId={indexId} task={task} taskEdit={true} />
          ) : (
           <>
            <div className="card-header">
                <h4>{task.title}</h4>
            </div>
            <div className="card-content">
                {task.task}
            </div>
            <div className="card-footer">
                <button value={indexId} onClick={handleDelete}   className="task-list-button danger">Sil</button>
                <button value={indexId} onClick={handleEditChange}  className="task-list-button">Düzenle</button>
            </div>
          </>
          )
         }
        
        </div>
     );
   
}

export default TaskShow;