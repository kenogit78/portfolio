import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles["nav-container"]}>

            <div className={styles["logo"]}>
                <a> PAUL KENO</a>
            </div>

            <div className={styles["nav-links"]} >
                <ul >
                    <li> Work </li>
                    <li> Resume</li>
                    <li> About </li>
                    <li> Contact </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar
