import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import TasksPage from '../pages/TasksPage'
import ProtectedRouter from './ProtectedRouter'
import Auth from '../components/Auth'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
        <Route path='/home' element={<HomePage/>} />
        
        <Route element={<Auth/>}>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Route>

        <Route element={<ProtectedRouter/>}>
          <Route path="/tasks" element={<TasksPage/>} />
        </Route>
    </Routes>
  )
}

export default MainRouter