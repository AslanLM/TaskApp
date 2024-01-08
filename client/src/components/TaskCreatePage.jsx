import React from 'react'
import {useForm} from 'react-hook-form'
import { useTask } from '../context/TasksContext'

const TaskCreatePage = ({onClose}) => {

  const {register, handleSubmit, formState: {errors}} = useForm()
  const {createTask} = useTask()

  const onSubmit = handleSubmit((data) => {
    createTask(data)
    onClose(); 
  });

  return (
    <div className='form-popup'>
    <div className='form-task-container form-create'>
      <form onSubmit={onSubmit}>
        <h1>Add a new Task</h1>
        <div className='input-task-data'>
          <input id='title' type='text' {...register('title', { required: true })} autoFocus placeholder='Title'></input>
          <label htmlFor='title' className='placeholder-task'></label>
          {errors.title && (<span className='errors'> Title is required </span>)}
        </div>

        <div className='input-task-data'>
          <textarea id='description' className='input-task-data' {...register('description', { required: true })} placeholder='Description'></textarea>
          <label htmlFor='description' className='placeholder-task'></label>
          {errors.description && (<span className='errors'> Description is required </span>)}
        </div>


        <button type="button" className='btn-close-form' onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#FF3F34" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/></svg>
        </button>
        <button className='btn'>Add Task</button>
      </form>
    </div>
    </div>
  )
}

export default TaskCreatePage