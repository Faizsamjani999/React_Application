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
    <div>
      <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-4 pb-2">
                            <h4 class="title mb-4">Our products</h4>
                            <p class="text-muted para-desc mx-auto mb-0">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                  {
                    arr.map((val)=>{
                      return(
                        <div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="#" class="image">
                                    <img class="pic-1" src={val.image}/>
                                    <img class="pic-2" src={val.image}/>
                                </a>
                                <a href="#" class="product-like-icon" data-tip="Add to Wishlist">
                                    <i class="far fa-heart"></i>
                                </a>
                                <ul class="product-links">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a href="#">{val.title}</a></h3>
                                <div class="price">${val.price}</div>
                            </div>
                        </div>
                    </div>
                      )
                    })
                  }
                    
                    
                </div>
            </div>
    </div>
  )
}

export default Product