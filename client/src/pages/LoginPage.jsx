import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

const LoginPage = ({toggleForm }) => {

  const {register, handleSubmit, formState: {errors}} = useForm()
  const {signin, isAuthenticated, authErrors } = useAuth()
  const navigate = useNavigate() 

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async(values) =>{
    signin(values)
  })

  return (
    <>
      <div className='form-title'>
        <h1>Login</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque neque non porro inventore, v
          oluptates minima doloribus incidunt? Omnis esse iste repellat quos. Quasi?
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-row">

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
            <span>Sign in</span>
          </button>           
        </div>
        </form>

        <p>
          Don't have an account? <Link to="/register" onClick={toggleForm}>Sign up</Link>
        </p>

    </>
  )
}

export default LoginPage