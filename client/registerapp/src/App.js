import './App.css'
import Homepage from "./components/homepage/Homepage"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useEffect, useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(()=>{
    localStorage.getItem('MyUser')
  }, [])

  const updateUser = (user)=>{
    localStorage.setItem('MyUser', JSON.stringify(user))
    setLoginUser(user)
  }
  return (
    <div className="App">
      <Router>
       <Routes>
         <Route exact path='/' element={<Homepage updateUser={updateUser}/>}>
           {/* {
             user && user._id ? <Homepage/> : <Login setLoginUser={setLoginUser}/>
           } */}
         </Route>
         <Route path='/Register' element={<Register/>}></Route>
         <Route path='/Login' element={<Login updateUser={updateUser}/>}></Route>
       </Routes>
       </Router>
    </div>
  );
}

export default App;