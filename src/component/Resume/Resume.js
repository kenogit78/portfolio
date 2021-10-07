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

                </div>

            </section>

            <section className={styles["resume-section"]}>

                <div className={styles["div-section"]}>
                    <h2> Skills </h2>
                </div>

                <div className={styles["div-section"]}>
                     <h2> Online Courses </h2>
                </div>

            </section>



        </div>
    )
}

export default Resume
