import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css"

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Cart/Heder";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./Components/Cart/Nav";
import Store from "./Components/Cart/Store";
import Home from "./Components/Cart/Home";
import About from "./Components/Cart/About";
import productsArr from "./Components/Cart/Data";
import ContactUs from "./Components/Cart/ContactUs";


function App() {
  const[productId,setProductId ] =useState('');
  const[save,setSave] = useState([]);

  const DataSubmitHandler = async(data)=>{
    console.log(data);
    const response = await fetch('https://store-e4d1d-default-rtdb.firebaseio.com/data.json',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-type':'application/json'
      }

    })
    const data1 = await response.json();
    console.log(data1);
        
    }
  


 
  useEffect(()=>{
    const filteredId = productsArr.filter((product)=>product.id==productId)
    setSave([...save,...filteredId]);
  },[productId])
  
  
  return (
    <>    
    <BrowserRouter>
    <Nav/>
    
    <Routes>
      <Route path="/" element={<Store  save={save} setProductId={setProductId} />}  />
      <Route path="/Home" element={<Home/>}   />
      <Route path="/About" element={<About/>} />
      <Route path="/contactus" element={<ContactUs  onSave={DataSubmitHandler} />}  />
    </Routes>

    </BrowserRouter>
    
    
    </>
    
  );
}

export default App;
