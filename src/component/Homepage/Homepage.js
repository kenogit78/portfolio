import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import Work from '../Work/Work';
import styles from './homepage.module.css';
import Image from '../../assets/paul.png';

const Homepage = () => {
    return (
        <div>
            <div className={styles["home-container"]}>

                <div className={styles["text"]} >
                    <h1> Hi, I'm Keno, </h1>
                    <p> a <span> Frontend Web Developer</span></p>
                    <br />
                    <p> I specialize in Website & Web application development </p>
                    <br />
                    <p> I believe in creating solutions for business and comapanies with clean codes</p>
                </div>

                <div className={styles["profile"]}>
                  <img className="" src= { Image } alt="profile" />
                </div>


                
            </div>






            <Work />
            <Resume />
            <About />
            <Contact />
        </div>
    )
}

export default Homepage
