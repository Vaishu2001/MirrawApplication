import React,{useState,useEffect} from 'react'
import BottomNavbar from './BottomNavbar'
import axios from 'axios'
import MiddleNavbar from './MiddleNavbar'
import TopNavbar from './TopNavbar'

import { Footer } from './Footer'
import './ProductResult.css'
export default function ProductResult() {
 
  const [APIdata, setAPIdata] = useState([]);
//  var cartCount = JSON.parse(localStorage.getItem("cartCount"));
  const[olddata,setOlddata]=useState("");
 
  //const[count,setCount]=useState(0);
  const[option,setOption]=useState("handPicked");
  const handleSubmit=(name,url,price)=>{
   //console.log(name,url);
   const cartData={name,price,url};
  //  localStorage.setItem("cartDetails", JSON.stringify(cartData));
  axios.post("http://localhost:9098/mirraw/cart", cartData)
  .then((response) => {
 //  console.log("in post"+count);
//setCount(count+1)
//console.log("in post"+count);
//localStorage.setItem("cartCount", JSON.stringify(count));
alert(name+" added to cart")
  })
   
    // window.location.reload();
   console.log("In result page")
  } 
  useEffect(()=>{

    var olddata = JSON.parse(localStorage.getItem("categoryName"));
    console.log(olddata)
    if(option==="handPicked"){
    axios.get(`http://localhost:9098/mirraw/category/${olddata}`).then((response)=>{
        console.log("Hello");
       console.log(response)
       console.log(response.data)
       console.log(response.data[0])
       console.log(response.data[0].item)
        setAPIdata(response.data[0].item);
        const data=response.data[0].item;
    
       console.log(APIdata);
setOlddata(olddata);
console.log("This is get")
   

    })
  }
  else if(option==="LHprice"){
    axios.get(`http://localhost:9098/mirraw/item/${olddata}`).then((response)=>{
        console.log("Hello");
       console.log(response)
   
        setAPIdata(response.data);
       console.log(APIdata);
setOlddata(olddata);
console.log("This is get")
    })
  }
  else if(option==="HLprice"){
    axios.get(`http://localhost:9098/mirraw/itemPrice/${olddata}`).then((response)=>{
        console.log("Hello");
       console.log(response)
   
        setAPIdata(response.data);
       console.log(APIdata);
setOlddata(olddata);
console.log("This is get")
    })
  }
  else if(option==="discount"){
    axios.get(`http://localhost:9098/mirraw/itemDiscount/${olddata}`).then((response)=>{
        console.log("Hello");
       console.log(response)
   
        setAPIdata(response.data);
       console.log(APIdata);
setOlddata(olddata);
console.log("This is get")
    })
  }
},[option])

return (
  <>
  <TopNavbar></TopNavbar>
  <hr></hr>
      <MiddleNavbar></MiddleNavbar>
       <hr></hr>
       <BottomNavbar></BottomNavbar>
       <div className='productResult'>
       <h4 className='catName'>{olddata} Collections:</h4>
         <input type="text" disable="true" value="Sort by" id="sortBar" ></input><span className="sortIcon" ><select  onChange={(e)=>setOption(e.target.value)} id="sortId" name="cars">
    <option value="handPicked">HandPicked</option>
    <option value="LHprice">Price-Low to High</option>
    <option value="HLprice">Price-High to Low</option>
     <option value="discount">Discounts</option>
   
    
   </select></span>
  <div className='Item-main'>
  {
      APIdata.map((data) => {
     
          return(
              
  <div className='Item-container'>
      <div onClick={() => handleSubmit(data.itemName,data.itemUrl,data.itemPrice)} className='Item-image'>
      <img className="product-image" src={data.itemUrl} alt="Shopping-image"/>
      </div>
      <div className='Item-contents'>
      <div  className='Item-Name'>
     {data.itemName}
      </div>
      <div className='sub-item'>
      <div className='Item-Price'>
         Rs {data.itemPrice}&nbsp;
      </div>
      <div className='Item-mPrice'>
         Rs {data.markedPrice}&nbsp;
      </div>
      <div className='Item-discount'>
         ({data.discount}%&nbsp;Off)
      </div>
      </div>
     
       <button type="button" class="btn btn-dark btncolor" onClick={() => handleSubmit(data.itemName,data.itemUrl,data.itemPrice)}>ADD TO CART</button>
  </div>
  </div>
      );})}
    </div> 
</div>
<Footer></Footer>
</>

)
}
