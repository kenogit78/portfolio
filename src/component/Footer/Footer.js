import React from 'react'
import styles from './footer.module.css'
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub  } from 'react-icons/fa';
import styled from 'styled-components';

const Twitter = styled(FaTwitter)`
    margin-right: 0.8em;
    font-size: 1.2em;
`;
const Instagram = styled(FaInstagram)`
    margin-right: 0.8em;
    font-size: 1.2em;
`;
const Linkedin = styled(FaLinkedin)`
    margin-right: 0.8em;
    font-size: 1.2em;
`;
const Github = styled(FaGithub)`
    margin-right: 0.8em;
    font-size: 1.2em;
`;

const Footer = () => {
    return (
        <div className={styles["footer"]}>

            <p> connect with me on social media </p>
            <div className={styles["footer-links"]}>
              <a href="https://www.twitter.com/paulkeno_"> < Twitter /> </a> 
              <a href="https://www.instagram.com/paulkeno_">   < Instagram /></a> 
               <a href="https://www.linkedin.com/in/paul-adaroje-95905b19b/"> < Linkedin/> </a>
               <a href="https://github.com/kenogit78"> < Github/></a>
                
            </div>
            <p> Paul Keno Adaroje 2021, All rights reserved</p>
        </div>
    )
}

export default Footer
