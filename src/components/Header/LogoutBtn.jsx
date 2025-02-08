import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
  const navigate= useNavigate();
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            navigate('/')
        })
    }
  return (
    <button
    className='inline-bock px-4 py-2 text-white bg-black font-semibold rounded-full ml-4 dark:text-black dark:bg-white'
    onClick={logoutHandler}
    >Logout</button>
  )
} 

export default LogoutBtn