import React from 'react'
import './design/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {

  const {user, logout, isAuthenticated} = useAuth()
 
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>
            <h1>Task <span>Master</span></h1>
            <div className='bg-logo'></div>
            </Link>
        </div>
        <nav>
            <ul>
                {isAuthenticated ? (
                     <>
                      <li>
                       Welcome {user.username}
                     </li> 
                     <li>
                        <NavLink  className='btn task-btn' to='/tasks'>Add Tasks</NavLink>
                     </li> 
                     <li>
                        <NavLink className='btn' to='/' onClick={()=>{logout()}}>Log Out</NavLink>
                     </li> 
                     </> 
                ) : (
                    <>
                  <li>
                  <NavLink className='btn' to='/login'>Log In</NavLink>
                  </li> 
                  </> 
                )}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar