import React from 'react';
import styles from './work.module.css';
import ZuriChat from '../../assets/zurichat.PNG';
import Desrio from '../../assets/desrio.PNG';
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';
// import {  FaGithub, FaLink  } from 'react-icons/fa';
// import styled from 'styled-components';


// const Github = styled(FaGithub)`
//     margin-right: 0.1em;
//     font-size: 1.2em;
// `;
// const Live = styled(FaLink)`
//     margin-right: 0.1em;
//     font-size: 1.2em;
// `;



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
                        {/* <h3>About ZuriChat</h3>
                        <p> ZuriChat is a workspace and communication tool for organizations with vast out of the box functionalities.</p>
                        <p> Stacks : Html, Css, JavaScript,</p> */}
                       
                        <p>  React </p>
                        <p>Nodejs</p> 
                        <p>Redux </p> 
                                
                        </div>
                            {/* <div>  <p>  React, Nodejs</p> </div>
                            <div>  </div> */}

                            {/* <div  className={styles["work-link"]} >
                        <div className={styles["link"]}>
                        <a href="https://github.com/kenogit78/zc_main"> <p>  < Github/> Source code </p>  </a>
                            
                        </div >

                        <div className={styles["link"]}>
                        <a href="https://zuri.chat/"> <p> <Live /> Live site</p> </a>

                        </div>

                        </div> */}
                    </div>
                </div>
        
            </div>

            <div className={styles["work-content"]}>
        

                <div 
                   data-aos="fade-up"
                   data-aos-easing="linear"
                   data-aos-duration="300"
                    className={styles["kelo"]}
                    
                    >
                        <a href="https://www.desrio.com/">
                            <img src={Desrio} alt="" />
                        </a>

                    <div className={styles.chat} id={styles.desrio}>
                        <h3> Desrio </h3>
                    <div className={styles["details"]} >
                        {/* <h3>About Kelo</h3>
                        <p> Kelo is a web application that helps people find places like hotels, restaurants and attractions. Implemented with Google Maps api, you can easily access places around you</p>

                        <p> Stacks : Html, Css, JavaScript,</p> */}
                <p> Reactjs</p>
                <p>  Nodejs</p>

                {/* <div  className={styles["work-link"]} >
            <div className={styles["link"]}>
            <a href="https://github.com/kenogit78/Kelo"> <p>  < Github/> Source code </p> </a>
                
            </div >

            <div className={styles["link"]}>
               <a href="https://epic-edison-44cffb.netlify.app/"> <p> <Live /> Live site</p> </a>

            </div>

            </div> */}
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
