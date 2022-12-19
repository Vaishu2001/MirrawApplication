import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Product.css'
export default function Product() {
   
    const navigate=useNavigate();
    const handleProductClick=(category)=>{
        localStorage.setItem("categoryName", JSON.stringify(category));
        //alert(category);
navigate("/store")
    }
  return (
    <div className='products-main'>
        <div onClick={() => handleProductClick('Wedding')} className='product1'>
            <img  src="https://assets0.mirraw.com/frontpages/12778/A_01_original_sized_webp.webp?1670566536"/>
        </div>
        <div className='products-sub'>
        <div onClick={() => handleProductClick('Lehenga')} className='product2'>
            <img src="https://assets0.mirraw.com/frontpages/12779/A_02_original_sized_webp.webp?1670566549"/>
            <img className="product2-image" src="https://assets0.mirraw.com/frontpages/12780/A_03_original_sized_webp.webp?1670566553"/>
        </div>
        <div  className='products-o-sub'>
        <div onClick={() => handleProductClick('Jewellery')} className='product3'>
            <img className='product3_image' src="https://assets0.mirraw.com/frontpages/12781/A_04_original_sized_webp.webp?1670566564"/>
            <img className="product3_image" src="https://assets0.mirraw.com/frontpages/12782/A_05_original_sized_webp.webp?1670566564"/>
            <img className='product4_image' src="https://assets0.mirraw.com/frontpages/12795/A_10_original_sized_webp.webp?1670566850"/>
        </div>
        <div onClick={handleProductClick} className='product4'>
            <img className='product4_image' src="https://assets0.mirraw.com/frontpages/12789/A_15_original_sized_webp.webp?1670566836"/>
        </div>

        </div>
        </div>
    </div>
  )
}
