import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'


const RegisterPage = ({toggleForm}) => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const {signup, isAuthenticated, authErrors } = useAuth()
    const navigate = useNavigate() 

    useEffect(() => {
      if (isAuthenticated) {
        navigate("/tasks");
      }
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async(values) =>{
      signup(values)
    })

  return (
    <>
       <div className='form-title'>
        <h1>Register</h1>
        <p>
        Ready to take control of your tasks? Join TaskApp today by registering your account. 
        Experience the ease of organizing your to-do list, editing tasks on the go, and enhancing your productivity.
        </p>
      </div>
       
        <form onSubmit={onSubmit}>
        <div className="form-row">

          <div className="input-data input-media">
          <input type='text' {...register('username', {required: true})} placeholder='' autoComplete='off'/>
          <label>Your UserName</label>
          {errors.username && (<span className='errors'> Username is required </span>)}
          <div className="underline" placeholder=""></div>
          </div>

          <div className="input-data input-media">
            <input type='email'{...register('email', {required: true})} placeholder=''  autoComplete="off"/>
            <label>Your Email</label>
            {errors.email && (<span className='errors'> Email is required </span>)}
            <div className="underline" placeholder=""></div>
          </div>

          <div className="input-data input-media">
            <input type='password' {...register('password', {required: true})} placeholder='' autoComplete="off"/>
            <label>Your Password</label>
            {errors.password && (<span className='errors'> Password is required </span>)}
            <div className="underline" placeholder=""></div>
            
          {
        authErrors.map((error, i)=> (
            <div className='errors' key={i}>
                {error}
            </div>
        ))
        }
          </div>
        </div>

        <div className="form-row"> 
          <button type='submit' className="btn">
            <span>Sign up</span>
          </button>
        </div>
        </form>

        <p>
          Already have an account? <Link to="/login" onClick={toggleForm}>Sign in</Link>
        </p>

    </>
  )
}

export default RegisterPage
