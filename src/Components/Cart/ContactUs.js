import React, { useState } from 'react'

const ContactUs = (props) => {
    const[name,setName]  = useState('');
    const[email,setEmail] = useState('');
    const[number,setNumber] = useState('')
    const NameChangeHandler = (e)=>{
        setName(e.target.value)
    }
    const EmailChangeHandler = (e)=>{
        setEmail(e.target.value)
    }
    const NumberChangeHandler = (e)=>{
        setNumber(e.target.value);
    }



    const FormDataHandler = (e)=>{
        e.preventDefault();
        const data = {
            name:name,
            email:email,
            number:number

        }
        props.onSave(data);

    }





  return (
    <form onSubmit={FormDataHandler}>
        <label htmlFor="">Name:</label>
        <input type="text" onChange={NameChangeHandler} value={name}   />
        <br />
        <label htmlFor="">Email:</label>
        <input type="Email" onChange={EmailChangeHandler} value={email} />
        <br />
        <label htmlFor="">Phone Number:</label>
        <input type="tel"  onChange={NumberChangeHandler}  value={number} />
        <br />
        <button type='submit'  >Submit</button>
    </form>

    
  )
}

export default ContactUs