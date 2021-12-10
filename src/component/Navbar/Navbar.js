import React from 'react';
// import styles from './navbar.module.css';
// import { motion } from 'framer-motion';
// import { BiMessageDots } from "react-icons/bi";

import { 
    NavContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    FaIcon, 
    NavLinks 
} from './NavbarStyles';

// import { Link } from 'react-router-dom';


const Navbar = ( { toggle } ) => {


    return (

        <NavContainer>


             <NavLogo to='/'>   paulkeno </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaIcon />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/project'
                        spy={true} smooth={true} duration={500}
                        > Projects </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/resume' spy={true} smooth={true} duration={500}> Resume </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/about' spy={true} smooth={true} duration={500}> About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/contact' spy={true} smooth={true} duration={500}> Contact </NavLinks>
                    </NavItem>
                </NavMenu>

            {/* </motion.div> */}
        

        </NavContainer>
    )
}

export default Navbar
