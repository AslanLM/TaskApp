import './App.css'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './router/MainRouter'
import { AuthProvider } from './context/AuthContext'
import { TaskProvider } from './context/TasksContext'
import Navbar from './components/Navbar'

function App() {
 
  return (
    <>
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter> {/*IMPORTANTE AGREGAR basename='/TaskApp' ANTES DE DESPLEGAR QUE NO SE TE OLVIDE */}

          <Navbar/>
          <MainRouter/>

        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
    </>
  )
}

export default App
