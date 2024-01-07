import React, { createContext, useContext, useEffect, useState } from 'react'
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () =>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [authErrors, setAuthErrors] = useState([])
    const [loading, setLoading] = useState(true)

    const signup = async (user) =>{
        try{
            const response = await registerRequest(user)
            setUser(response.data)
            setIsAuthenticated(true)
            setAuthErrors([]);
        }catch(error){
            setAuthErrors(error.response.data)
        }
    }

    const signin = async (user) =>{
        try{
            const response = await loginRequest(user)
            setUser(response.data)
            setIsAuthenticated(true)
            setAuthErrors([]);
        }catch(error){
            setAuthErrors(error.response.data)
        }
    }

    const logout = () =>{
        Cookies.remove('token')
        isAuthenticated(false)
        setUser(null)
    }

    useEffect(()=>{
       const checkLogin = async () =>{
        const cookies = Cookies.get()

        if(!cookies.token) {
            setIsAuthenticated(false)
            setLoading(false)
            return setUser(null)
        }
            try{
                const response = await verifyTokenRequest(cookies.token)
                if(!response.data){
                    setIsAuthenticated(false);
                    setLoading(false);
                    return
                }
                setIsAuthenticated(true)
                setUser(response.data)
                setLoading(false)
            }catch(error){
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
            }
       }
       checkLogin()
    }, [])
    

    return(
        <AuthContext.Provider value={{signup, signin, logout, loading, user, isAuthenticated, authErrors}}>
            {children}
        </AuthContext.Provider>
    )
}