import React from 'react';
import styles from './contact.module.css';
import Image from '../../assets/paul.png';

const Contact = () => {
    return (
        <div className={styles["contact-container"]} >
            
        <h1> Contact </h1>

            <div className={styles["contact-content"]} >

                <div className={styles["profile"]}>
                  <img className="" src= { Image } alt="profile" />
                </div>

                <div >
                    <h3> Form</h3>
                </div>
            </div>
        
    </div>
    )
}

export default Contact
