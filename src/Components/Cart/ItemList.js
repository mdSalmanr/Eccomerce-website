import React from 'react'
import productsArr from './Data'
import './ItemList.css'


const ItemList = ({save}) => {
  return (
    <>
    {save.map((list)=>{
        return(
            <div className='item'>
        
        
        
        <div className= "img">
            <img src={list.imageUrl} alt="" />
            <p>{list.name}  </p>
        </div>
        <div className= "amount">
            <p>{list.price}</p>
        </div>
        <div className= "quantity">
            <div>{0}</div>
            <button>REMOVE</button>

        
        

        </div>
        
        
    </div>
        )
    })}
    </>  
  )
}

export default ItemList