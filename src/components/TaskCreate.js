function TaskCreate() {
    return ( 
        <div className="task-create">
            <h3>Lütfen Task Ekleyiniz</h3>
            <label>Başlık</label>
            <input className="task-input"/>
            <label>Task Giriniz</label>
            <textarea className="task-input"/>
            <button className="task-button">Oluştur</button>
        
        </div>
     );
}

export default TaskCreate;