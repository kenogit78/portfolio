import React from 'react';
import styles from './about.module.css';

const About = () => {
    return (
        <div className={styles["about-container"]} id='about' >
            
            <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="300"
            > About Me.</h1>

            <div className={styles["about-content"]}>

                <section className={styles["text"]}>    

                <div>
                
                <a href="https://docs.google.com/document/d/1ros3E9QQK5ZUJdHDXgDTF7j0sVjIto0G8tSbossR5qk/edit?usp=sharing"> 
                View my resume  </a>  or
                <a href="http://github.com/kenogit78">Visit my Github profile </a>
                
                    <p>
                        Hi, I'm Keno, a Software Engineer who's passionate about solving problems with code. 
                        My most recent team is GECKO FIVE where we are building an incredible product in the sport niche, building a social media app around sports; 
                        I built the majority of the user-and-model interactions, conversations api, highlight feature and a couple of other features.
                    </p>

                    <p> In 2021, I also did a 3 month internship with the renowned HNG internship team, 
                        where I led a team that built an amazing product called zurichat. The product will be launched soon <a href="https://www.zuri.chat/">link here</a> 
                    </p>

                    <p>
                    I'm also passionate about teaching others about tech. I engage a lot of newbies by teaching them from scratch and equipping them with the right resources. 
                    The more reason why I joined the Side Hustle Internship platform where I mentor a lot of interns across Africa.
                    </p>

                    <p> I’m familiar with technologies such as JavaScript, Typescript, React, Nextjs, Gatsbyjs, 
                        Vue.js, CSS, SCSS, Framer Motion, styled-component, TailwindCSS, Nodejs, MongoDB, Firebase
                    </p>
                    
                </div>

                </section>

            </div>

        </div>
    )
}

export default About
