import React from 'react'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'

const Homepage = ({updateUser}) => {
  const naviagte = useNavigate()
  return (
    <div className='homepage'>
        <h1>hello{updateUser}</h1>
        <div className='button' onClick={()=> naviagte('/Login')}>Logout</div>
    </div>
  )
}

export default Homepage 