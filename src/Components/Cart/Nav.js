import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import "./Nav.css"


const Nav = () => {    
  return (
    <div className='nav' >
     <nav>
        <Link to='/Home'><li id='home' >HOME</li></Link>
        <Link to='/'><li>STORE</li>  </Link>
        <Link to='/About'><li>ABOUT</li></Link> 
        <Link to='/contactus'><li>CONTACT US</li></Link>   
     </nav>
    
    </div>
  )
}

export default Nav