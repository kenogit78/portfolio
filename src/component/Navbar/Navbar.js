import React from 'react';
import styles from './navbar.module.css';
import { motion } from 'framer-motion';

const Navbar = () => {


    return (
        <motion.div className={styles["nav-container"]}>

            <motion.div className={styles["logo"]}
            
            >
                <p> PAUL KENO </p>
            </motion.div>

            <motion.div className={styles["nav-links"]} 
            initial={{opacity: 0}}
            animate ={{opacity:1}}
            transition={{delay:1.5, duration: 1.5}}
            >
                <ul >
                    <li> Work </li>
                    <li> Resume</li>
                    <li> About </li>
                    <li> Contact </li>
                    
                </ul>

            </motion.div>
        </motion.div>
    )
}

export default Navbar
