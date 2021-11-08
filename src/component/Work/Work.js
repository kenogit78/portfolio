import React from 'react';
import styles from './work.module.css';
import ZuriChat from '../../assets/zurichat.PNG';
import Kelo from '../../assets/kelo.png';
import {  FaGithub, FaLink  } from 'react-icons/fa';
import styled from 'styled-components';


const Github = styled(FaGithub)`
    margin-right: 0.1em;
    font-size: 1.2em;
`;
const Live = styled(FaLink)`
    margin-right: 0.1em;
    font-size: 1.2em;
`;

const Work = () => {
    return (
        <div className={styles["work-container"]} id='work' >
            
            <h1
             data-aos="fade-right"
             data-aos-easing="linear"
             data-aos-duration="1000"
            > Projects </h1>

        <section className={styles["work-section"]}>

            <div className={styles["work-content"]}>
                <h2
                 data-aos="fade-right"
                 data-aos-easing="linear"
                 data-aos-duration="1000"
                >
                    Zuri Chat
                </h2>
                <p
                 data-aos="fade-right"
                 data-aos-easing="linear"
                 data-aos-duration="1000"
                > Full Stack Build </p>

                <div className={styles["kelo"]}>
                    <img 
                     data-aos="fade-right"
                     data-aos-easing="linear"
                     data-aos-duration="1200"
                    src={ZuriChat} alt="" />

                    <div
                     data-aos="fade-left"
                     data-aos-easing="linear"
                     data-aos-duration="1000"
                    className={styles["details"]} >
                        <h3>About ZuriChat</h3>
                        <p> ZuriChat is a workspace and communication tool for organizations with vast out of the box functionalities.</p>
                        <p> Stacks : Html, Css, JavaScript,</p>
                <p> Frameworks : Reactjs, Nodejs</p>

                <div  className={styles["work-link"]} >
            <div className={styles["link"]}>
            <a href="https://github.com/kenogit78/zc_main"> <p>  < Github/> Source code </p>  </a>
                
            </div >

            <div className={styles["link"]}>
               <a href="https://zuri.chat/"> <p> <Live /> Live site</p> </a>

            </div>

            </div>
                    </div>
                </div>


               
            </div>

      

            <div className={styles["work-content"]}>
            <h2
             data-aos="fade-right"
             data-aos-easing="linear"
             data-aos-duration="1000"
            >
                    Kelo App
                </h2>
                <p
                 data-aos="fade-right"
                 data-aos-easing="linear"
                 data-aos-duration="1000"
                > Full Stack Build </p>

                <div className={styles["kelo"]}>
                    <img 
                     data-aos="fade-right"
                     data-aos-easing="linear"
                     data-aos-duration="1200"
                    src={Kelo} alt="" />

                    <div 
                     data-aos="fade-left"
                     data-aos-easing="linear"
                     data-aos-duration="1000"
                    className={styles["details"]} >
                        <h3>About Kelo</h3>
                        <p> Kelo is a web application that helps people find places like hotels, restaurants and attractions. Implemented with Google Maps api, you can easily access places around you</p>

                        <p> Stacks : Html, Css, JavaScript,</p>
                <p> Frameworks : Reactjs, Nodejs</p>

                <div  className={styles["work-link"]} >
            <div className={styles["link"]}>
            <a href="https://github.com/kenogit78/Kelo"> <p>  < Github/> Source code </p> </a>
                
            </div >

            <div className={styles["link"]}>
               <a href="https://epic-edison-44cffb.netlify.app/"> <p> <Live /> Live site</p> </a>

            </div>

            </div>
                    </div>
                </div>


            </div>
        </section>
        </div>
    )
}

export default Work
