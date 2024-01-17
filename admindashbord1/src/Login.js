import React from   "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { RiAdminFill } from "react-icons/ri";
import { FcBusinessman } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
import Main from "./Main";
import { useState } from "react";
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Routes , Route , useNavigate} from 'react-router-dom';
import Dashboard from "./Dashboard";
 function Login() {

  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[formerr,setFormerr] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function handleClick() {
    const logindata =  axios.post('http://localhost:5000/Login', {
        email:email,
        password:password
     })
    .then(function(response) {  
      
      const token = response.data.token;
      localStorage.setItem("token",response.data.token)
      if(token)
      {
        navigate('/main')
      }
      else(
        alert('error')
      )
    }).catch(function(err) {
      console.log(err);
   console.log("!incorreact")
      err = new Error();
   })
    }
  

   return(
        <>
        <div className="bg d-flex justify-content-center">
        
        <div className="loginpage">
                <div className="page">
                    <h1 className="fo" style={{ fontFamily:'cursive'}}><RiAdminFill/>Admin Login</h1>
                    <div className="border"> </div>
                    <div className="content">
                        <div className="d-flex col-12">
                        <p className="col-3 mt-3" style={{ fontFamily:'monospace'}}>Email:</p>
                        <input type="email" style={{ height:'30px',width:'1500px'}} className="mt-3"  value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
                        <div className="fs-3 mt-1">
                            <FcBusinessman/>
                        </div>
                        </div>
                        <div className="d-flex">
                        <p className="col-3 mt-2" style={{ fontFamily:'monospace'}}>Password:</p>
                        <input type="password" style={{ height:'30px',width:'1500px'}} className="mt-2 ms-2" placeholder=" " value={password}
            onChange={(e) => setPassword(e.target.value)}>
                           
                        </input>
                  
                      
                        <div className="fs-4">
                        <FcLock/></div>
                        </div>
                        <div className="border"></div>
                        <div>
                            <input type="checkbox"></input>
                            <label className="ms-1" style={{ fontFamily:'monospace'}}>Remember me</label>
                            <label className="ms-5" style={{ fontFamily:'monospace'}}><u>Forget Password</u></label>
                        </div>
                      
                        <div className="mt-3">
                            <button className="btn1">Register</button>
                           
                            <button className="btn1" onClick={handleClick}>Login  </button>
                           
                           

                            </div>
                          </div>
                        <Routes>
                                <Route path="/main" element={ <Main/>}></Route>
                        </Routes>
                       
                    </div>
                </div>
          </div>
        </>
    )
    
}
export default Login;