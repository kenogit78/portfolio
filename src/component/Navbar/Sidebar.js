import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu

} from './NavbarStyles';

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink  to='/project' onClick={toggle}>
                        Project
                    </SidebarLink>
                    <SidebarLink to='/about' onClick={toggle}>
                        About
                    </SidebarLink>
                   
                    <a href="mailto:paulkenoofficial@gmail.com"> Contact </a>

                </SidebarMenu>
             </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
