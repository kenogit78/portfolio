import React from 'react';
import styles from './work.module.css';
import Kelo from '../../assets/kelo.png';


const Work = () => {
    return (
        <div className={styles["work-container"]} id='work' >
            
            <h1> Projects </h1>

        <section className={styles["work-section"]}>

            <div className={styles["work-content"]}>
                <h1>
                    Kelo App
                </h1>
                <p> Full Stack Build </p>

                <div className={styles["kelo"]}>
                    <img src={Kelo} alt="" />
                </div>

                <p> Stacks : Html, Css, JavaScript,</p>
                <p> Frameworks : Reactjs, Nodejs</p>

                <div  className={styles["work-link"]} >
            <div className={styles["link"]}>
            <a href="https://github.com/kenogit78/Kelo"> <p> View repo</p>  </a>
                
            </div >

            <div className={styles["link"]}>
               <a href="https://epic-edison-44cffb.netlify.app/"> <p> Live site</p> </a>

            </div>

            </div>
            </div>

      

            <div className={styles["work-content"]}>
                <h2>
                    Kenpop Website
                </h2>

                <div className={styles["kelo"]}>
                    <h3>Loading...</h3>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Work
