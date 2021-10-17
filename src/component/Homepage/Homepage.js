import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import Work from '../Work/Work';
import styles from './homepage.module.css';
import Image from '../../assets/paul.png';
import Footer from '../Footer/Footer';

const Homepage = () => {
    return (
        <div>
            <div className={styles["home-container"]}>

                <div className={styles["text"]} >
                    <h1> Hi, I'm Keno, </h1>
                    <p> a <span> Frontend Web Developer.</span></p>
                    <br />
                    <br />
                    <p> I specialize in providing Web solutions by writing clean codes for Websites & Web applications. </p>
                    <br />
                    <br />
                    <p> I believe in creating products that have relevance in our present world.</p>
                </div>

                <div className={styles["profile"]}>
                  <img className="" src= { Image } alt="profile" />
                </div>

                


                
            </div>






            <Work />
            <Resume />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Homepage
