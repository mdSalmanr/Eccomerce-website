import {Fragment} from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'

const Backdrop = props =>{
    return <div className = 'backdrop' onClick={props.onClose}  ></div>
}

const ModalOverlay = (props) =>{
    return<div  className = 'modal'>
        <div className='content' >{props.children}</div>
    </div>
}
const PortalElement = document.getElementById('overlays')

const Modal = (props)=>{
    
    return(
        <Fragment>
           {ReactDOM.createPortal(<Backdrop onClick={props.onClose} />,PortalElement)}
           {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>
        ,PortalElement)}
        </Fragment>
    )
}
export default Modal;