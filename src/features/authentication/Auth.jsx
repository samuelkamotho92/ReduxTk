import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { loggedIn,loggedOut } from './authSlice'
const Auth = () => {
    const status = useSelector(state=>state.auth.authState)
    const dispatch = useDispatch()
  return (
    <div>
        <button
        onClick={()=>dispatch(loggedIn())}
        >Log In</button>
{status}
        <button
        onClick={()=>dispatch(loggedOut())}
        >Log Out</button>
    </div>
  )
}

export default Auth