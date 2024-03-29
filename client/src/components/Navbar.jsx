import React from 'react'
import './design/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {

  const {user, logout, isAuthenticated} = useAuth()
 
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/home'>
            <h1>Task <span>Master</span></h1>
            <div className='bg-logo'></div>
            </Link>
        </div>
        <nav>
            <ul>
                {isAuthenticated ? (
                     <>
                      <li className='li-username'>
                       Welcome {user.username}
                     </li> 
                     <li>
                        <NavLink  className='btn task-btn' to='/tasks'>Dashboard</NavLink>
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