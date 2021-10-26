import React from 'react';
import styles from './contact.module.css';
import Image from '../../assets/keno.png';

const Contact = () => {
    return (
        <div className={styles["contact"]} id="contact" >
            
        <h1> Contact </h1>

            <div className={styles["contact-content"]} >

                <div className={styles["profile"]}>
                  <img className="" src= { Image } alt="profile" />
                </div>

                <div className={styles["form-content"]} >
                    <h3> Want to connect with me?</h3>
                    <h3> Drop a message here?</h3>
                  

                    
                    <form action="">
                        <input type="text"
                        placeholder='Your Name'
                        />
                        <input type="text"
                        placeholder='Your Email'
                        />
                       <textarea name="" id="" cols="30" rows="10"
                       placeholder="Your message"></textarea>


                         <button>Send</button> 
         
                    </form>
                </div>
            </div>
        
    </div>
    )
}

export default Contact
