import React from 'react';
import './Footer.css'
import { CDBBox,CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import mirrawLogo from '../images/mirrawLogo.png'
export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
          

             
        
          
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4  head-footer-text" style={{ fontWeight: '600' }}>
              HELP
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink className='footer-text' ><span>Survey</span></CDBFooterLink>
              <CDBFooterLink className='footer-text' ><span>How To Buy</span></CDBFooterLink>
              <CDBFooterLink className='footer-text'><span>Track Order</span></CDBFooterLink>
              <CDBFooterLink className='footer-text'><span>Payments</span></CDBFooterLink>
              <CDBFooterLink className='footer-text'><span>Shipping</span></CDBFooterLink>
              <CDBFooterLink className='footer-text'><span>Cancellations</span></CDBFooterLink>
              <CDBFooterLink className='footer-text'><span>FAQ</span></CDBFooterLink>
              <CDBFooterLink className='footer-text'><span>Helpdesk</span></CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4  head-footer-text" style={{ fontWeight: '600' }}>
              COMPANY
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink style={{ color:"white"}}className='footer-text'><span>About Us</span></CDBFooterLink>
              <CDBFooterLink className='footer-text' ><span>Contact Us</span></CDBFooterLink>
              <CDBFooterLink className='footer-text' ><span>Careers</span></CDBFooterLink>
              <CDBFooterLink className='footer-text' ><span>Blog</span></CDBFooterLink>
              <CDBFooterLink className='footer-text' ><span>Terms</span></CDBFooterLink>
              <CDBFooterLink className='footer-text' ><span>Privacy</span></CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4 head-footer-text" style={{ fontWeight: '600' }}>
              BUSINESS
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink className='footer-text' ><span>International Buyers</span></CDBFooterLink>
              <CDBFooterLink className='footer-text' ><span>Sell On Mirraw</span></CDBFooterLink>
              <CDBFooterLink className='footer-text' ><span>Designer Login</span></CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4 head-footer-text" style={{ fontWeight: '600' }}>
              COUPON PARTNERS
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink className='footer-text' ><span>Mirraw Coupons</span></CDBFooterLink>
              <CDBFooterLink className='footer-text' ><span>Mirraw Offers</span></CDBFooterLink>
           
            </CDBBox>
          </CDBBox>
          <p className="ml-3 h5 font-weight-bold  head-footer-text press">PRESS</p>
              <div className='pressImages'>
              <img className="press-style" src="https://www.mirraw.com/assets/dna-be0b711232e819d1dfeb542296bf4d56c80cd17c41badb9494300cffe4fe9cf5.png"/>
              <img className="press-style"src="https://www.mirraw.com/assets/yourstory-af15b2ddcc71a01016c6b879d665af554375ace702d94eaa48d0b2210834e0d4.png"/>
              <img className="press-style"src="https://www.mirraw.com/assets/payu-a31ef1db3817ade015c5ad386da4b2211b82dbebcad90964c58e4b7dc889b255.png"/>
              <img className="press-style"src="https://www.mirraw.com/assets/paypal-449cce1c328ad3e821e482a3795a336b4659a62c892eddb7f5dd095eb5d42a16.png"/>
              </div>
        </CDBBox>
        
        <CDBBox
          display="flex"
          justifyContent="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
        <small className="text-center mt-5 head-footer-text">Copyright &copy; 2022, Mirraw Online Services Pvt. Ltd. All Rights Reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};