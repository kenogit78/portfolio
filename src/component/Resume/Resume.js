import React from 'react';
import styles from './resume.module.css';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Resume = () => {
    return (
        <div className={styles['resume']} id='resume' >
            
            <h1 
            data-aos="zoom-out-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            > Resume </h1>

            <section className={styles["resume-section"]}>

                <div 
                
                className={styles["div-section"]} >
                    <h2> Work Experience </h2>

                    <div 
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    // data-aos-easing="ease-in-sine"
                    className={styles["sub-div"]} >
                      <a href="https://hng.tech/">  <h3> HNGi8 Internship <FaExternalLinkAlt /> </h3> </a> 
                        
                        <p> Frontend Developer </p>
                        <p> August 2021 - October 2021 </p>
                    </div>

                    <div 
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    className={styles["sub-div"]}>
                        <a href="https://gads.andela.com/"> <h3> Google Africa Developer Program <FaExternalLinkAlt /> </h3> </a>
                        
                        <p> Frontend Developer </p>
                        <p> July 2021 - current </p>
                    </div>

                </div>

                <div className={styles["div-section"]}>
                    <h2> Education </h2>
                    <div 
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className={styles["sub-div"]} >
                        <a href="https://uniben.edu.ng/"><h3> University of Benin <FaExternalLinkAlt /></h3></a>
                       
                        <p>  B.ENG Electrical/Electronics Engineering </p>
                        <p> 2012 -2017 </p>
                    </div>
                   





                </div>

            </section>


            <section className={styles["resume-section"]}>
                    
                <div data-aos="fade-up" data-aos-duration="3000" className={styles["div-section"]}>
                    <h2> Skills </h2>
                    
    

                    <div className={styles["skills-section"]}> 

                        <div className={styles["sub-div"]} >
                            <h3> Development</h3>
                         
                            <p> HTML5 </p>
                            <p> CSS3 </p>
                            <p> JavaScript </p>
                            <p> React </p>
                        </div>

                        

                        <div className={styles["sub-div"]} >
                            <h3> Tools </h3>
                         
                            
                            <p> Firebase </p>
                            <p> GitHub </p>
                            <p> Postman </p>
                            <p> Visual Studio Code </p>
                        
                        </div>

                    </div>
                </div>

                <div className={styles["div-section"]}>
                     <h2> Online Courses </h2>

                     <div
                     data-aos="fade-up" data-aos-duration="2000"
                     className={styles["sub-div"]} >
                        <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"><h3> Udemy <FaExternalLinkAlt /> </h3> </a>
                    
                        <p>  The Complete Web Development Bootcamp </p>
                        <p> 2021 </p>
                    </div>

                     <div 
                     data-aos="fade-up" data-aos-duration="3000"
                     className={styles["sub-div"]} >
                       <a href="https://www.codecademy.com/learn/introduction-to-javascript"> <h3> Codecademy <FaExternalLinkAlt /></h3> </a>
                       
                        <p>  Certified JavaScript Web Developer </p>
                        <p> 2021 </p>
                    </div>

                  
                </div>

            </section>

            <div className={styles["box"]} >
                       <h3>Download Resume  </h3>  
                  </div>



        </div>
    )
}

export default Resume
