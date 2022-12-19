import React, { useState } from 'react'
import mirrawLogo from '../images/mirrawLogo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import "./MiddleNavbar.css"
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
export default function MiddleNavbar() {
  const navigate=useNavigate();
  const[input,setInput]=useState(" ");
  const handleSearch=()=>{
    console.log("working");
    localStorage.clear();
    localStorage.setItem("categoryName", JSON.stringify(input));
    navigate("/store");
  }
  const GoToLandingPage=()=>{
    navigate("/");
  }
  
  return (
    <div className='MiddleNavbar'>
        <img onClick={GoToLandingPage} className="mirrawLogo" src={mirrawLogo} alt="Paris"></img>
        <input  onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Search something..." id="searchBar" ></input><span onClick={handleSearch}className="searchIcon" ><AiOutlineSearch style={{ height:"2.8rem",
    width:"2.8rem", color:"white",backgroundColor:"rgb(103,11,25)"}}></AiOutlineSearch></span>
    </div>
  )
}
