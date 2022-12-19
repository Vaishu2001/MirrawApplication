import React from 'react'
import './TopNavbar.css';
import { BsFillPersonFill } from 'react-icons/bs';
import {BsCartCheckFill} from 'react-icons/bs';
import Cart from './Cart';
import LogInPopUp from './LogInPopUp';
export default function TopNavbar() {
  return (
    <div className="TopNavbar">
  <ul>
  <li><a href="#home">Contact Us </a></li>
  <li>|</li>
  <li><a href="#news">7 Day Returns</a></li>
  <li>|</li>
  <li><a href="#contact">Track Order</a></li>
  <li>|</li>
  <li><a href="#about">Return Order</a></li>
  <li>|</li>
  <li><a href="#contact">Sell On Mirraw</a></li>
  <li>|</li>
  <li><a href="#about">Survey</a></li>
  <li className='logIcon'><BsFillPersonFill></BsFillPersonFill></li>
  {/* <li className='logName'>LOG IN</li> */}
  <LogInPopUp></LogInPopUp>
  {/* <li className='cartIcon'><BsCartCheckFill></BsCartCheckFill></li>
  <li className='cartName'>CART(0)</li> */}
  <Cart></Cart>
  {/* <li className='logIcon'><BsFillPersonFill></BsFillPersonFill></li>
  <li>LOG IN</li> */}

</ul>

    </div>
  )
}
