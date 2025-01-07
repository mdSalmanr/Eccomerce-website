import React from "react";
import "./Header.css"

const Header = (props)=>{
    return(
        <button onClick={props.onShowCart} className="button" >Cart</button>

    )
}
export default Header