import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './LogInPopUp.css'
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
export default function LogInPopUp() {
  //localStorage.setItem("cartCount", JSON.stringify(0));
  const navigate =useNavigate();
    const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  const handleLoginNavigation=()=>{
    navigate("/accounts/sign_in");

  }
  const handleSignUpNavigation=()=>{
    navigate("/accounts/sign_up");

  }

  return (
    <div
    // className="d-flex align-items-center justify-content-center"
    // style={{ height: "100vh" }}
  >
    <li  className= 'logName'  id="Popover1" type="button" color="primary">
    LOG IN
    </li>
    <Popover
      placement="bottom"
      isOpen={popoverOpen}
      target="Popover1"
      toggle={toggle}
    
    >
      
      <PopoverBody ><div className='popup'>
        <p>Existing User?</p>
        <button type="button" onClick={handleLoginNavigation} className="btn btn-danger " style={{backgroundColor:"rgb(143,25,36)"}}>Login</button>
        <hr className="hori-Line"></hr>
        <p>New to Mirraw? </p>
        <button type="button" onClick={handleSignUpNavigation} className="btn btn-danger  " style={{backgroundColor:"rgb(143,25,36)"}}>Register</button>
      </div>
   
      </PopoverBody>
    </Popover>
  </div>
  )
}
