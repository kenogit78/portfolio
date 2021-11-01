import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import Work from '../Work/Work';
import styles from './homepage.module.css';
import Image from '../../assets/keno.png';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Homepage = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["small-container"]}>
            <div className={styles["home-container"]}>

                <div className={styles["text"]} >
                    <motion.h1
                    initial={{opacity: 0, y:30}}
                    animate ={{opacity:1, y:0}}
                    transition={{ duration: 1}}
                    > 
                        Hi, I'm <span>Keno,</span> 
                    </motion.h1>
                    
                   
                    
                    <motion.p
                    initial={{opacity: 0, y:30}}
                    animate ={{opacity:1, y:0}}
                    transition={{ delay: 1, duration: 1}}
                    > a <span> Web Developer.</span>
                    </motion.p>
                    <br />
                  
                    <motion.p
                    initial={{opacity: 0, y:30}}
                    animate ={{opacity:1, y:0}}
                    transition={{ delay: 1.3, duration: 1}}
                    > I specialize in providing Web solutions by writing clean codes for Websites & Web applications. </motion.p>
                    <br />
                  
                    <motion.p
                    initial={{opacity: 0, y:30}}
                    animate ={{opacity:1, y:0}}
                    transition={{ delay: 1.5, duration: 1}}
                    > I believe in creating products that have relevance in our present world.
                    </motion.p>
                    <Link to="about">
                    <div className={styles["box"]} >
                       <h3>Wanna Know More?  </h3>  
                  </div>
                  </Link>
                   
                </div>
                    
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className={styles["profile"]}
                    >
                    {/* <div className={styles["profile-box"]} >  </div> */}
                  <img className="" src= { Image } alt="profile" />
                  
                </div>

                


                
            </div>

            <Work />
            <Resume />
            <About />
            <Contact />
            </div>
            <Footer />
            
        </div>
    )
}

export default Homepage
