import React from 'react';
import styles from './work.module.css';
import ZuriChat from '../../assets/zurichat.PNG';
import Desrio from '../../assets/desrio.PNG';
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';




const Work = () => {
    return (
        <div className={styles["work-container"]} id='work' >
            
            <h2
             data-aos="fade-up"
             data-aos-easing="linear"
             data-aos-duration="300"
            > Selected Projects </h2>

        <section className={styles["work-section"]}>

            <div className={styles["work-content"]}>
                
                <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="300"
                className={styles["kelo"]}>
                    <a href="https://www.zuri.chat/">
                        <img src={ZuriChat} alt="" />
                   </a>
                <div className={styles.chat}>
                        <h3>  Zuri Chat</h3>
                    <div
                    className={styles["details"]} >
                        <p> React </p> <p> Nodejs </p>  <p> Redux </p>       
                        </div>
                           
                    </div>
                </div>
        
            </div>

            <div className={styles["work-content"]}>
        

                <div 
                   data-aos="fade-up"
                   data-aos-easing="linear"
                   data-aos-duration="300"
                    className={styles["kelo"]} >
                        <a href="https://www.desrio.com/">
                            <img src={Desrio} alt="" />
                        </a>

                    <div className={styles.chat} id={styles.desrio}>
                        <h3> Desrio </h3>
                    <div className={styles["details"]} >
                      
                <p> Reactjs</p>
                <p>  Nodejs</p>
             </div>
                </div>
                </div>
            </div>
        </section>

        <Link to="/project">
            <div className={styles["box"]}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="400" >
                <p>See more projects  </p> 
                <div className={styles.icon}> <HiArrowSmRight fontSize='1.2em' /> </div>
            </div>
        </Link>
        </div>
    )
}

export default Work
