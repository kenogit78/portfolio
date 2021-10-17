import React from 'react';
import styles from './about.module.css';
import Image from '../../assets/paul.png';

const About = () => {
    return (
        <div className={styles["about-container"]} >
            
            <h1> About </h1>

            <div className={styles["about-content"]}>

                <section className={styles["text"]}>

                    <div className={styles["text-div"]}>
                        <h3> Who am I?</h3>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Suscipit eos facere molestiae tempore cum quisquam id molestias fugiat praesentium 
                            reiciendis aspernatur possimus saepe,
                            blanditiis explicabo quia sequi vitae quo iste.</p>

                    </div>

                    <div className={styles["text-div"]}>
                        <h3> What do I do?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Vel, aliquam necessitatibus iste harum commodi nobis, debitis 
                            repudiandae beatae voluptatibus omnis asperiores atque consequatur 
                            iusto porro laborum ex quo officiis temporibus.</p>

                    </div>

                    <div className={styles["text-div"]}>
                        <h3> Who am I passionate about?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Soluta debitis praesentium velit ad ratione quisquam modi 
                            tempora mollitia eum cum architecto, culpa et ea ipsum odio 
                            vero animi repudiandae adipisci!</p>

                    </div>

                </section>

                <div className={styles["profile"]}>
                  <img className="" src= { Image } alt="profile" />
                </div>

            </div>

        </div>
    )
}

export default About
