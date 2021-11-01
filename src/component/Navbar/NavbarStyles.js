import styled from 'styled-components'
import {Link as LinkS } from 'react-scroll'
import {FaTimes} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
// import { Link as LinkR } from 'react-router-dom'


export const NavContainer = styled.div`
display: flex;
max-width: 100%;
height:80px;
z-index:1;
justify-content: space-between;
align-items: center;
padding: 2em;
box-shadow: -8px 2px 16px 2px rgba(255,0,0,0.5);


@media screen and (max-width: 768px){
    padding: 1em;
}
`

export const NavLogo = styled(LinkS)`
margin-left: 2em;
display: flex;
align-items: center;
font-size: 2em;
text-decoration: none;
color: #000;
font-weight: 550;
font-family: Lato;
cursor: pointer;

@media screen and (max-width: 768px){
    margin-left: 0.5em;
}

&:hover{
    color: #FF9300;
    transition: 0.7s ease-in-out;
}
`

export const FaIcon = styled(FaBars)`
    color: #FF0000;

 `

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        margin-right: 1em;
        font-size: 1.8em;
        cursor: pointer;
        color: #FF0000

    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style:none;
    text-align: center;
    margin-right: 3em;


    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    font-family: Lato;

    
`

export const NavLinks = styled(LinkS)`
    height: 100%;
    text-decoration: none;
    padding: 0 1.5em;
    align-items:center;
    color: #505050;
    font-size: 1.1em;
    cursor: pointer;

    &:hover{
        color: #FF0000;
        transition: 0.4s ease-in-out;
    }
`


// `````````Sidebar Elements````````
export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width:100%;
    height: 100%;
    background: #333;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.8s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

 export const CloseIcon = styled(FaTimes)`
    color: #FF0000;

 `

 export const Icon = styled.div`
    position: absolute;
    top: 1.6em;
    right:1.4em;
    background: transparent;
    font-size: 2em;
    cursor: pointer;
    outline: none;
 `

 export const SidebarWrapper = styled.div`
    color: #fff;
 `

 export const SidebarMenu = styled.ul`
    display: grid;
    text-align: center;
    grid-template-columns : 1fr;
    grid-template-rows : repeat(4, 100px);
    text-align: center;

    @media screen and (max-width: 400px) {
        grid-template-rows : repeat(4, 80px);
    }
 `


 export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #FF9300;
        transition: 0.2s ease-in-out;
    }
 `
