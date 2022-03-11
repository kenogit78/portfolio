import React from 'react';
import Work from '../Work/Work';
import styles from './homepage.module.css';
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';

const Homepage = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["small-container"]}>
            <div className={styles["home-container"]}>

                <div className={styles["text"]} >
                    <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="300"
                    > 
                        Hi, I'm Keno 
                    </p>
                    
                   
                    
                    <h1
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    > Fullstack Software Engineer
                    </h1>
                    
                    <h3
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    > I solve problems through codes
                    </h3>
                    <br />
{/*                   
                    <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    > I am a creative and solution-oriented software engineer who loves solving problems 
                    by creating products that have relevance in our present world. </p>
                    <br />
                  
                    <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    > I'm experienced in developing websites, eCommerce, web applications, 
                    creating site engines from scratch, Complex database design, implementing real-time updates of content.
                    </p> */}
                    <Link to="/about">
                    <div className={styles["box"]}
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400" >
                       <p>See more about me  </p> 
                       <div className={styles.icon}> <HiArrowSmRight fontSize='1.2em' /> </div>
                  </div>
                  </Link>
                   
                </div>
                    
                           


                
            </div>

            <Work />

            <div className={styles.touch}>
                <h3> Open to opportunities & collaborations</h3>
                <a href="mailto:paulkenoofficial@gmail.com"> Get in touch </a>
            </div>
        
            </div>
            
        </div>
    )
}

export default Homepage
