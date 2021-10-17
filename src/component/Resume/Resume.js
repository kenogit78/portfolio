import React from 'react';
import styles from './resume.module.css';

const Resume = () => {
    return (
        <div className={styles["resume-container"]} >
            
            <h1> Resume </h1>

            <section className={styles["resume-section"]}>

                <div className={styles["div-section"]} >
                    <h2> Work Experience </h2>

                    <div className={styles["sub-div"]} >
                        <h3> HNGi8 Internship</h3>
                        <br />
                        <p> Frontend Developer </p>
                        <p> August 2021 - current </p>
                    </div>

                    <div className={styles["sub-div"]}>
                        <h3> Google Africa Developer internship </h3>
                        <br />
                        <p> Frontend Developer </p>
                        <p> July 2021 - current </p>
                    </div>

                </div>

                <div className={styles["div-section"]}>
                    <h2> Education </h2>
                    <div className={styles["sub-div"]} >
                        <h3> University of Benin</h3>
                        <br />
                        <p>  B.ENG Electrical/Electronics Engineering </p>
                        <p> 2012 -2017 </p>
                    </div>
                   





                </div>

            </section>


            <section className={styles["resume-section"]}>

                <div className={styles["div-section"]}>
                    <h2> Skills </h2>

                    <div className={styles["skills-section"]}> 

                        <div className={styles["sub-div"]} >
                            <h3> Development</h3>
                            <br />
                            <p> HTML5 </p>
                            <p> CSS3 </p>
                            <p> JavaScript </p>
                            <p> React </p>
                        </div>

                        

                        <div className={styles["sub-div"]} >
                            <h3> Tools </h3>
                            <br />
                            
                            <p> Firebase </p>
                            <p> GitHub </p>
                            <p> Postman </p>
                            <p> Visual Studio Code </p>
                        
                        </div>

                    </div>
                </div>

                <div className={styles["div-section"]}>
                     <h2> Online Courses </h2>
                     <div className={styles["sub-div"]} >
                        <h3> Codecademy</h3>
                        <br />
                        <p>  Certified JavaScript Web Developer </p>
                        <p> 2021 </p>
                    </div>

                     <div className={styles["sub-div"]} >
                        <h3> Udemy </h3>
                        <br />
                        <p>  The Complete Web Development Bootcamp </p>
                        <p> 2021 </p>
                    </div>
                </div>

            </section>

            <div className={styles["download-resume"]} >
                <h2> Download Resume</h2>
            </div>



        </div>
    )
}

export default Resume
