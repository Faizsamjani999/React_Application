import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Product.modules.css"

function Product() {
  const [arr,setArr] = useState([]);

  useEffect(()=>{
    axios('https://fakestoreapi.com/products')
    .then((res)=>{
      setArr(res.data);
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  console.log(arr);

  
  

  return (
    <div class="container bg-white">
  <nav class="navbar navbar-expand-md navbar-light bg-white">
    <div class="container-fluid p-0"> <a class="navbar-brand text-uppercase fw-800" href="#"><span class="border-red pe-2">New</span>Product</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
      <div class="collapse navbar-collapse" id="myNav">
        <div class="navbar-nav ms-auto"> <a class="nav-link active" aria-current="page" href="#">All</a> <a class="nav-link" href="#">Women's</a> <a class="nav-link" href="#">Men's</a> <a class="nav-link" href="#">Kid's</a> <a class="nav-link" href="#">Accessories</a> <a class="nav-link" href="#">Cosmetics</a> </div>
      </div>
    </div>
  </nav>
  <div class="row">
    {
      arr.map((val)=>{
        return(
          <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
      <div class="product"> <img src={val.image} alt=""/>
        <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
          <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
          <li class="icon mx-3"><span class="far fa-heart"></span></li>
          <li class="icon"><span class="fas fa-shopping-bag"></span></li>
        </ul>
      </div>
      <div class="tag bg-red">sale</div>
      <div class="title pt-4 pb-1" style={{fontWeight:"bold",textAlign:"center"}}>{val.title}</div>
      <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
      <div class="price">Price - {val.price} === Rating :- {val.rating.rate}</div>
      <div>
        <p style={{fontWeight:"bold",color:"blue"}}>{val.category}</p>
      </div>
      <div>
        <p>{val.description}</p>
      </div>
    </div>
        )
      })
    }
    
    
  </div>
  
</div>
  )
}

export default Product