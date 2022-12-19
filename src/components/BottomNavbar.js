import React from 'react'
import './BottomNavbar.css'
<link rel="stylesheet" href="/bower_components/lato-font/css/lato-font.css"></link>
export default function BottomNavbar() {
  return (
    <div className="BottomNavbar">
    <ul className='list-main'>
    <li className='list'><a className="list-link" href="#home">Sarees </a></li>
    
    <li className='list'><a className="list-link" href="#news">Lehengas</a></li>
  
    <li className='list'><a className="list-link" href="#contact">Salwar Kameez</a></li>
   
    <li className='list'><a className="list-link" href="#about">Kurtis</a></li>
  
    <li className='list'><a className="list-link" href="#contact">Jewellery</a></li>
    
    <li className='list'><a className="list-link" href="#about">Kids</a></li>
    <li className='list'><a className="list-link"href="#about">Men</a></li>
    <li className='list'><a className="list-link" href="#about">Home &amp; Living</a></li>
    <li className='list'><a className="list-link" href="#about">Spiritual</a></li>
    <li className='list'><a className="list-link" href="#about">Luxe</a></li>
    <li className='list'><a className="list-link" href="#about">Collections</a></li>
    
    
    {/* <li className='logIcon'><BsFillPersonFill></BsFillPersonFill></li>
    <li>LOG IN</li> */}
  
  </ul>
  </div>
  )
}
