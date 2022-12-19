import React,{useState} from 'react'
import BottomNavbar from './BottomNavbar'
import MiddleNavbar from './MiddleNavbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import TopNavbar from './TopNavbar'
import { Footer } from './Footer'
import './SignIn.css'
export default function SignIn() {
  const [email,setEmail]=useState("");
  const navigate=useNavigate();
  const[password,setPassword]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios
        .get(`http://localhost:9098/mirraw/findByUserNameAndPassword/${email}/${password}`)
        .then((response) => {
          console.log("working")
          console.log(response.data)
          console.log(email,password)
          if (response.data="loggedIn") {
           alert("Login successful")
        navigate("/")
          }
          else{
         alert(response.data)
          }
        })
        .catch(function (error) {
          alert("Invalid email or password")
          console.log(error);
        });
  }
  return (
    <>
    <TopNavbar></TopNavbar>
    <hr></hr>
    <MiddleNavbar></MiddleNavbar>
    <hr></hr>
    <BottomNavbar></BottomNavbar>
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label>Email address</label>

          <input
           onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
           onChange={(e)=>setPassword(e.target.value)}
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
            <div className='SignInSubmit'>
          <button onClick={handleSubmit} type="submit" className="btn btn-primary signInSubmit1">

            Submit
          </button>
          </div>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a className="pwdcolor" href="#">password?</a>
        </p>
      </div>
    </form>
  </div>
  <Footer></Footer>
    </>
  )
}
