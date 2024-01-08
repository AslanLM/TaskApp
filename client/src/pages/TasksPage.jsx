import React, { useEffect, useState } from 'react'
import '../components/design/Tasks.css'
import { useTask } from '../context/TasksContext'
import TaskFormPage from '../components/TaskFormPage'
import TaskEditPage from '../components/TaskEditPage'
import TaskCreatePage from '../components/TaskCreatePage'

const TasksPage = () => {

  const { tasks, getTasks, deleteTask } = useTask()
  const [isEditing, setIsEditing] = useState(false);
  const [taskEdit, setTaskEdit] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [taskCreate, setTaskCreate] = useState(null);

  const openEditForm = (task) => {
    setIsEditing(true);
    setTaskEdit(task)
  };

  const closeEditForm = () => {
    setIsEditing(false);
    setTaskEdit(null);
  };

  const openCreateForm = (task) => {
    setIsCreating(true);
    setTaskCreate(task)
  };

  const closeCreateForm = () => {
    setIsCreating(false);
    setTaskCreate(null);
  };



  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

   useEffect(()=>{
    getTasks()
   }, [])


  return (
    <div className='tasks'>
      <button className='btn btn-create' onClick={() => openCreateForm(tasks)}>Add Task</button>
       <div className='task-container'>
        {tasks.length === 0 && (
              <div className='task-empty'>
                <h1>
                  No tasks yet, please add a new task
                </h1>
              </div>
        
          )}
        {tasks.map(task =>(
          <div className='task-card' key={task._id}>
            <div className='info-card'>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
            </div>
            <div className='other-info-card'>
              <span>{formatDate(task.date)}</span>
              <div className='btn-container'>
                <button className='btn-edit' onClick={() => openEditForm(task)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#ffffff" d="M14 22v-3.075l6.575-6.55l3.075 3.05L17.075 22zm7.5-6.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zM4 22V2h10l6 6v3h-2V9h-5V4H6v16h6v2zm15.025-5.025l-.475-.45l.925.925z"/></svg>
                </button>
                <button className='btn-delete' onClick={()=>{deleteTask(task._id)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="#ffffff" d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13z"/></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='form-wrap'>
        <TaskFormPage/>
      </div>
      {isEditing && <TaskEditPage task={taskEdit} onClose={closeEditForm} />}
      {isCreating && <TaskCreatePage task={taskCreate} onClose={closeCreateForm} />}
    </div>
  )
}

export default TasksPage