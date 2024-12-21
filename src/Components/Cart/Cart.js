import Modal from "../UI/Modal";
import './Cart.css'

const Cart = (props)=>{
    return(
        <Modal>
            <button className="btn" onClick={props.onClose} >remove</button>
            <h2 className="head" >Cart</h2>
            
            <div className="speci" >
                <div className="s" ><h2>ITEM</h2></div>
                <div className="s" ><h2>PRICE</h2></div>
                <div className="s" ><h2>QUANTITY</h2></div>

            </div>
            <h2 className="to" >Total</h2>
            <span className="sp"  >$0</span>
            
             

            <button className="button" >PURCHASE</button>
        </Modal>
    )
}
export default Cart