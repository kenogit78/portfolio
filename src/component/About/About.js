import React from 'react';
import styles from './about.module.css';
import Image from '../../assets/keno.png';

const About = () => {
    return (
        <div className={styles["about-container"]} id='about' >
            
            <h1> About </h1>

            <div className={styles["about-content"]}>

                <section className={styles["text"]}>

                    <div className={styles["text-div"]}>
                        <h3> Who am I?</h3>
                        <p> My name is <span> Adaroje Paul Keno,</span> I am a Web Developer based in Ibadan, Nigeria. I have a B.ENG in Electrical/Electronics Engineering and a background in Design.
                            </p>

                    </div>

                    <div className={styles["text-div"]}>
                        <h3> What do I do?</h3>
                        <p>
                            I combine research, user flows, storytelling and creativity to transform basic ideas into interesting solutions. I understand user demands and build solutions to effectively meet them.
                            </p>

                    </div>

                    <div className={styles["text-div"]}>
                        <h3> What am I passionate about?</h3>
                        <p>
                            As a creative developer, I derive pleasure in translating ideas into tangible results.
                            </p>

                        
                        <br />
                        <p>
                            I am extremely passionate about creating beautiful experience on the web, building unique products that creates amazing user experiences.
                        </p>

                        
                            <br />
                        <p>
                            Most importantly, I enjoy working with creative minds and diverse people to create amazing things together.
                            
                            </p>

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
