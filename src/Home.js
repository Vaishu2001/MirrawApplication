import React from 'react'
import TopNavbar from './components/TopNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import './Home.css'
import MiddleNavbar from './components/MiddleNavbar';
import BottomNavbar from './components/BottomNavbar';
import AdCarousel from './components/AdCarousel';
import { Footer } from './components/Footer';
import Product from './components/Product';
import EthnicDesc from './components/EthnicDesc';
import LogInPopUp from './components/LogInPopUp';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Cart from './components/Cart';
export default function home() {
  return (
    <div>
          <TopNavbar></TopNavbar>
          <hr></hr>
          <MiddleNavbar></MiddleNavbar>
          <hr></hr>
          <BottomNavbar></BottomNavbar>
         <AdCarousel></AdCarousel>
         <Product></Product>
         <EthnicDesc></EthnicDesc>
         <Footer></Footer>
       
        
    </div>
  )
}
