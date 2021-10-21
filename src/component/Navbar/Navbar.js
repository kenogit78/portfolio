import React from 'react';
// import styles from './navbar.module.css';
// import { motion } from 'framer-motion';
import { BiMessageDots } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { 
    NavContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks 
} from './NavbarStyles';

// import { Link } from 'react-router-dom';


const Navbar = ( { toggle } ) => {


    return (

        <NavContainer>


             <NavLogo to='contact'>  <BiMessageDots /> hi@keno </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='work'> Work </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='resume'> Resume </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='about'> About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'> Contact </NavLinks>
                    </NavItem>
                </NavMenu>

            {/* </motion.div> */}
        

        </NavContainer>
    )
}

export default Navbar
