import React from 'react';
import Button from '../Button/Button';
import styles from './contact.module.css';
// import Image from '../../assets/keno.png';

const Contact = () => {
    return (
        <div 
        
        className={styles["contact"]} id="contact" >
            
        <h1
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="400"
        > Contact Me. </h1>

            <div className={styles["contact-content"]} >

                {/* <div 
                data-aos="zoom-out"
                data-aos-easing="linear"
                data-aos-duration="400"
                className={styles["profile"]}>
                  <img className="" src= { Image } alt="profile" />
                </div> */}

                <div 
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="400"
                className={styles["form-content"]} >
                    <h3> Want to connect with me?</h3>
                    <h3> Drop a message here.</h3>
                  

                    
                    <form action="">
                        <input type="text"
                        placeholder='Your Name'
                        />
                        <input type="text"
                        placeholder='Your Email'
                        />
                       <textarea name="" id="" cols="30" rows="10"
                       placeholder="Your message"></textarea>


                        {/* <div className={styles["box"]} >
                       <h3>Send  </h3>  
                  </div> */}

                  <Button button={'Send'} />
         
                    </form>
                </div>
            </div>
        
    </div>
    )
}

export default Contact
