import React, { useState } from 'react'
import mail from '../../assets/email.png';
import mobile from '../../assets/mobile.png';
import './contact.scss';
import { Facebook, GitHub, Instagram, LinkedIn} from '@mui/icons-material';

import {addDoc,collection,serverTimestamp} from 'firebase/firestore';
import { db } from '../../firebase';


const Contact = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const contactRef=collection(db,"contacts");

    const handleClick=async (e)=>{
        e.preventDefault();
        try {
            await addDoc(contactRef,{
                Name:name,
                Email:email,
                Message:message,
                createdAt:serverTimestamp(),
            })
            // console.log(user);
          } catch (error) {
            console.log(error.message);
          }
    }


    
  return (
    <div className='contact'>
        <div className="container">
            <h1>Contact <span>Me</span> </h1>
            <div className="mp">
                <div className="mailme">
                    <img src={mail} alt="" />
                    <a href="mailto:yashofbel@gmail.com" className='link'>yashofbel@gmail.com</a>
                </div>
                <div className="phme">
                    <img src={mobile} alt="" />
                    <a href="tel:+(91) 7899625091 " className='link'>+91 7899625091</a>
                </div>
            </div>
            <p>I will be happy to answer any questions you have or provide you with an estimate. Just send me a message by filling in the form below.</p>
            <form>
                <div className="messageme">
                    {/* <div className="name"> */}
                        <input type="text" placeholder='Your Name' onChange={(e)=>setName(e.target.value)} />
                    {/* </div> */}
                    {/* <div className="email"> */}
                        <input type="email" placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} />
                    {/* </div> */}
                    {/* <div className="comments"> */}
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' onChange={(e)=>setMessage(e.target.value)}></textarea>
                    {/* </div> */}
                    <div className="btn">
                        <button className="button" onClick={handleClick}>
                            Send Message
                        </button>
                    </div>
                </div>
                <div className="connectwithme">
                    <hr />
                    <h2>Find <span>me</span>  on</h2>
                    <p>Feel free to connect with me</p>
                    <div className="social">
                        <a href="https://github.com/Yashrajgoudar" className="link" target={"_blank"}><GitHub  className='icon'/></a>
                        <a href="https://www.linkedin.com/in/yashraj-goudar-8577361b0/" className="link" target={"_blank"}><LinkedIn className='icon'/></a>
                        <a className='link' href="https://www.instagram.com/yashgoudar/" target={"_blank"}><Instagram className='icon'/></a>
                        <a className='link' href="https://www.facebook.com/YashrajGoudar" target={"_blank"}><Facebook className='icon' /></a>        
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact