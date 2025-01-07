import Modal from "../UI/Modal";
import './Cart.css'
import ItemList from "./ItemList";

const Cart = ({save,onClose})=>{
    return(
        <Modal>
           
            <button className="btn" onClick={onClose} >
            <i class="fa-solid fa-xmark"></i>
            </button>
            <h2 className="head" >Cart</h2>
            
            <div className="speci" >
                <div className="s"id="item"><h3>ITEM</h3></div>
                <div className="s price" ><h3>PRICE</h3></div>
                <div className="s qunti" ><h3>QUANTITY</h3></div>
            </div>
            <ItemList save={save} />
            <div className="price1" >
                <h2>Total<span>${0}</span> </h2>
            </div>
            <button className="button1" type="submit" >PURCHASE</button>
        </Modal>
    )
}
export default Cart