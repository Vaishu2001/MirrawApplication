import React, { useState,Component } from 'react'
import BottomNavbar from './BottomNavbar'
import axios from 'axios'
import MiddleNavbar from './MiddleNavbar'
import { Footer } from './Footer'
import './SignUp.css'
import TopNavbar from './TopNavbar'
export default function SignUp() {
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("")
  const customerData={email,password};
  const handleSubmit=()=>{
    axios.post("http://localhost:9098/mirraw/signUp", customerData)
.then((response) => {
  
  alert("Registered Successfully");
  window.location.reload();
})

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
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label className='labelName'>Email address</label>
            <input
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label className='labelName'>Password</label>
            <input
             onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label className='labelName'>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <div className='signUpSubmit'>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary signUpSubmit1">
              Submit
            </button></div>
          </div>
          
        </div>
      </form>
    </div>
    <Footer></Footer>
    </>
  )
}
