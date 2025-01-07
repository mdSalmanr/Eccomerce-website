import React, { Fragment } from "react";
import { useState } from "react";
import Heder from "./Heder";



import Cart from "./Cart";
import "./Store.css";
import productsArr from "./Data";

const Store = ({setProductId,save}) => {
  const AddToCartHandler = (id)=>{
    setProductId(id);
  }
  


  

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const ShowClickHandler = () => {
    setCartIsVisible(true);
  };
  const HideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <Fragment>
      <button className="cart-setting">
        <Heder onShowCart={ShowClickHandler} />
        {cartIsVisible && <Cart onClose={HideCartHandler} save={save}  />}
      </button>
      <div className="gene">
            <h1>The Generics</h1>
          </div>
          <div className="music">
            <h1>MUSIC</h1>
          </div>

      <div className="main">
         
        {productsArr.map((data1,index)=>{
          return(
            
        <div className='list1' >
          <div className="list">
            <h2>{data1.name}</h2>
            <img src={data1.imageUrl} alt="" />
          </div>
          <div className="cart">
            <p>${data1.price}</p>
            <button onClick={()=> AddToCartHandler(data1.id)} >ADD TO CART</button>
          </div>
        </div>
          )
        })}
        
      </div>
    </Fragment>
  );
};

export default Store;
