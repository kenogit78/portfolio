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
                    <h1
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="300"
                    > 
                        Hi, I'm Paul Keno Adaroje
                    </h1>
                    
                   
                    
                    <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="400"
                    > a <span> Fulltack Web Developer.</span>
                    </p>
                    <br />
                  
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
                    </p>
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
        
            </div>
            
        </div>
    )
}

export default Homepage
