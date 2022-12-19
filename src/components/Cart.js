
import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsCartCheckFill} from 'react-icons/bs';
import axios from 'axios'
import "./Cart.css"
export default function Cart() {
  const [APIdata, setAPIdata] = useState([]);
 // var cartCount = JSON.parse(localStorage.getItem("cartCount"));
  const[count,setCount]=useState(0);
  const [show, setShow] = useState(false);
  const[totalPrice,setTotalPrice]=useState(0);

  
  const handleDelete=(name)=>{
    console.log("go to delete fn")
    axios.delete(`http://localhost:9098/mirraw/${name}`)
    .then((Response)=>{
      window.location.reload();
     {console.log("deleted suceefully")}
     
    })
  }
  useEffect(()=>{

    
   
   // var cartCount = JSON.parse(localStorage.getItem("cartCount"));
    //console.log("cartpage"+cartCount)
//setCount(cartCount)
  axios.get("http://localhost:9098/mirraw/allCart")
    .then((response) => {
    setAPIdata(response.data);
      console.log("In cart page"+response.data)
      var temp=0;
      setCount(response.data.length)
      for(var i=0;i<response.data.length;i++){
        console.log("vaish"+i)
        console.log(response.data[i].price)
     temp+=response.data[i].price;
      }
    setTotalPrice(temp)
      
    })

      
   
  },[show])
  
  
  // useEffect(()=>{

   
   
  
  // })

  return (
    <>
    {/* <Button variant="primary" onClick={() => setShow(true)}>
      Custom Width Modal
    </Button> */}
      <li onClick={() => setShow(true) }className='cartIcon'><BsCartCheckFill></BsCartCheckFill></li>
  <li onClick={() => setShow(true)} className='cartName'>CART({count})</li>
 
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Shopping Basket
        </Modal.Title>
        
      </Modal.Header>
      <Modal.Body>
      {
    APIdata.map((data) => {
      
   console.log("working")
        return(
      < div className="cart_items">
<div className='cart_body'>
  <div className='cart-first'>
  <img  className="cart_item" src={data.url}/>
  <p className='iName'>{data.name}</p>
<button type="button" onClick={() => handleDelete(data.name)} class="btn btn-secondary remove">Remove</button>
</div>
<p className="iPrice">Price : Rs {data.price}</p>
</div>

    </div>
        
        );})} 
        <div className="item-summary">
  <h4>ORDER SUMMARY</h4>
  <div className='item-total'>
  <p>Item Total</p>
 <p className='total'>Rs {totalPrice}</p>
  </div>
  <div className='item-total'>
  <p>Shipping</p>
 <p className='total'>&nbsp;&nbsp;Rs &nbsp;&nbsp;0</p>
  </div>
  <div className='item-total-price'>
  <p ><b>Amount Payable</b></p>
 <p className='total'><b>Rs &nbsp;&nbsp;{totalPrice}</b></p>
 <button type="button" style={{backgroundColor:"rgb(143,25,36)"}}className="btn btn-danger placeOrder">PLACE ORDER</button>
  </div>

</div>   
      </Modal.Body>
    </Modal>


  </>
  );
  }

 
            

    
