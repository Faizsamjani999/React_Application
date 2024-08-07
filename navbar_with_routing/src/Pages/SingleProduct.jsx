import React, { useState,useEffect } from 'react'
import axios from "axios"
import "./SingleProduct.modules.css"
import { useParams } from 'react-router-dom'

function SingleProduct() {

    const {id} = useParams()

    const [arr,setArr] = useState({})

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
          setArr(res.data);
          console.log(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
      },[])
  return (
    <section id="product-info">

        <div class="item-image-parent">
            
            <div class="item-image-main">
                <img src={arr.image} alt="default" />
            </div>
        </div>

        <div class="item-info-parent">
            
            <div class="main-info">
                <h4 style={{fontWeight:"bold",color:"blue",fontVariant:"small-caps"}}>{arr.title}</h4>
                <h2>{arr.category}</h2>
                <div class="star-rating">
                    {/* <span>{arr.rating.rate} ★★★★</span>            */}
                </div>
                <p>Price: <span id="price">₹ {arr.price}</span></p>
            </div>
            
            <div class="select-items">
                
                
                
                

                <div class="description">
                    <ul>
                        <li>{arr.description}</li>
                        <li>Fit Type: Classic Fit</li>
                        <li>Color name: Black-White</li>
                        <li>Material: Cotton</li>
                        <li>Pattern: Solid</li>
                    </ul>
                </div>
            </div>
            
        </div>
        
    </section>
    
    
  )
}

export default SingleProduct