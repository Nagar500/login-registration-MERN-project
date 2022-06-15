import React, {useState} from 'react'
import './Login.css'
import Axios from 'axios'
// import Homepage from '../homepage/Homepage'
// import Homepage from '../homepage/Homepage'
import { useNavigate} from 'react-router-dom'

const Login = ({updateUser}) => {
  
    // const navigate = useNavigate()

    const [user, setUser] = useState({
        email:"",
        password:"",
    })

    const navigate = useNavigate()

const handleChange = (e)=>{
    const {name,value} = e.target
    setUser({...user, [name]:value})
}

const login = ()=>{
    Axios.post('http://localhost:5000/Login', user)
    .then(res => {
        alert(res.data.message)
        updateUser=(res.data.user)
        if(updateUser){
        
            navigate('/')
        }else{
            navigate('/Login')
        }
       
})
   
}

  return (
    <div className='login'>
        {console.log(user)}
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} placeholder='Enter Your Email' onChange={handleChange} />
        <input type="password" name="password" value={user.password} placeholder='Enter Your Password' onChange={handleChange} />
        <div className='button' onClick={login}>Login</div>
        <div>Or</div>
        <div className='button' onClick={()=> navigate('/Register')}>Register</div>
    </div>
  )
}

export default Login