import React from 'react'
import {useForm} from 'react-hook-form'
import { useTask } from '../context/TasksContext'

const TaskFormPage = () => {

  const {register, handleSubmit, formState: {errors}} = useForm()
  const {createTask} = useTask()

  const onSubmit = handleSubmit((data) =>{
    createTask(data)
  })

  return (
    <div className='form-task-container'>
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

        
        <button className='btn'>Add Task</button>
      </form>
    </div>
  )
}

export default TaskFormPage