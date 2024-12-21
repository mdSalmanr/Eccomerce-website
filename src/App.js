import React from "react";
import { useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Cart/Heder";


function App() {
  const ShowClickHandler = ()=>{
    setCartIsVisible(true);
  }
  const HideCartHandler = ()=>{
    setCartIsVisible(false);
  }
  const[cartIsVisible,setCartIsVisible] = useState(false);
  return (
    <>
    {cartIsVisible && <Cart  onClose={HideCartHandler} />}
    
    <Header onShowCart={ShowClickHandler}/>
    <span>0</span>
    </>
    
  );
}

export default App;
