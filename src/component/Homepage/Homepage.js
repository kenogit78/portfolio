import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import Work from '../Work/Work';
import styles from './homepage.module.css';
import Image from '../../assets/keno.png';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';

const Homepage = () => {
    return (
        <div>
            <div className={styles["home-container"]}>

                <div className={styles["text"]} >
                    <motion.h1
                    initial={{opacity: 0, y:30}}
                    animate ={{opacity:1, y:0}}
                    transition={{ duration: 1}}
                    > 
                        Hi, I'm Keno,
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

                   
                </div>
                    
                <motion.div className={styles["profile"]}
                initial={{opacity: 0, scale: 0}}
                animate ={{opacity:1, scale: 1 }}
                transition={{ delay: 2, duration: 2}}
                >
                  <img className="" src= { Image } alt="profile" />
                </motion.div>

                


                
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
