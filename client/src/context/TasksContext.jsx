import React, { createContext, useContext, useEffect, useState } from 'react'
import {createTaskRequest,  getTasksRequest, deleteTaskRequest, getTaskRequest, editTaskRequest} from "../api/task";

export const TaskContext = createContext()

export const useTask = () =>{
    const context = useContext(TaskContext)
    if(!context){
        throw new Error("useTask must be used within an TaskProvider");
    }
    return context;
}

export const TaskProvider = ({children}) =>{

    const [tasks, setTasks] = useState([])
    const [taskErrors, setTaskErrors] = useState([])

    const getTasks = async(task) =>{
        try{
            const response = await getTasksRequest(task)
            setTasks(response.data)
        }catch(error){
            setTaskErrors(error.response.data)
        }
       
    }

    const createTask = async(task) =>{
        try{
           const response = await createTaskRequest(task)
            getTasks();
        }catch(error){
            setTaskErrors(error.response.data)
        }
        
    }

    const deleteTask = async(id) =>{
        try{
            const response = await deleteTaskRequest(id)
            getTasks();
        }catch(error){
            setTaskErrors(error.response.data)
        }
    }

    const editTask = async (id, task) => {
        try {
           const response = await editTaskRequest(id, task);
            getTasks();
        } catch (error) {
            setTaskErrors(error.response.data)
        }
      }

    return (
        <TaskContext.Provider value={{tasks, createTask, getTasks, deleteTask, editTask, taskErrors}}>
            {children}
        </TaskContext.Provider>
    )
}

