import React from 'react';
// import styles from './navbar.module.css';
// import { motion } from 'framer-motion';
// import { BiMessageDots } from "react-icons/bi";
import Logo from '../../assets/logo.png'

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


             <NavLogo to='/'> <img src={Logo} alt={Logo} />   </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaIcon />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/project'spy={true} smooth={true} duration={500} > Work </NavLinks>
                    </NavItem>

                    {/* <NavItem>
                        <NavLinks to='/resume' spy={true} smooth={true} duration={500}> Resume </NavLinks>
                    </NavItem> */}
                    
                    <NavItem>
                        <NavLinks to='/about' spy={true} smooth={true} duration={500}> About </NavLinks>
                    </NavItem>
                    <NavItem>
                       
                        <a href="mailto:paulkenoofficial@gmail.com"> Contact </a>
                    </NavItem>
                </NavMenu>

            {/* </motion.div> */}
        

        </NavContainer>
    )
}

export default Navbar
