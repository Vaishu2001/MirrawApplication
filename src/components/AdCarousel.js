import React from 'react'
import './AdCarousel.css'
import carousel3 from '../images/carousel3.jpg'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
export default function AdCarousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='offer1'
        itemId={1}
        src="https://image-marketing.s3.ap-south-1.amazonaws.com/Pradyumna/Dhrumil/drive-download-20220916T095409Z-001/Festive-Sale-(Mobile-Banner-Buy-1-get-3).jpg"
        alt='...'
      >
    
      </MDBCarouselItem>

      <MDBCarouselItem
        className='offer1'
        itemId={2}
        src="https://images.milledcdn.com/2019-07-17/71TGqdMlQcZgjjuF/L9g0Q_AkODSz.jpg"
        alt='...'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='offer1'
        itemId={3}
        src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618569967027/mirraw-coupons.jpg"
        alt='...'
      >
  
      </MDBCarouselItem>
    </MDBCarousel>
  )
}
