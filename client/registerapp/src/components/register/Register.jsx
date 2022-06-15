import React, {useState} from 'react'
import './Register.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
const naviagte = useNavigate()
const handleChange = (e)=>{
    const {name,value} = e.target
    setUser({...user, [name]:value})
}

const register = (e)=>{
    e.preventDefault()
    const {name, email, password, reEnterPassword} = user
    if(name && email && password && (password === reEnterPassword)){
        Axios.post('http://localhost:5000/Register',user)
        .then(res => {alert(res.data.message)
            naviagte('/Login')
        })
    
    }
    else{
        alert("invalid input")
    }
    
}

  return (
    <div className='register'>
        {console.log(user)}
        <h1>Login</h1>
        <input type="text" name="name" value={user.name} placeholder='Your Name' onChange={handleChange} />
        <input type="text" name="email" value={user.email} placeholder='Your Email' onChange={handleChange} />
        <input type="password" name="password" value={user.password} placeholder='Your Password' onChange={handleChange} />
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter Password' onChange={handleChange} />
        <div className='button' onClick={register}>Register</div>
        <div>Or</div>
        <div className='button' onClick={()=> naviagte('/Login')}>Login</div>
    </div>
  )
}

export default Register