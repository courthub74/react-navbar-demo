import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
// import { NavbarData } from './NavbarData';
import { IconContext } from 'react-icons/lib';
import SubMenu from './Submenu';
import './Navbar.css'
import { ToDos } from './ToDos';
import { Button } from '../Button'
import { Scrollbars } from "react-custom-scrollbars"

//NAVBAR
const Nav = styled.div`
    background: linear-gradient(90deg, rgb(19, 18, 22) 0%, rgb(23, 13, 204) 100%);
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

//Created SIDEBAR NAV
const SidebarNav = styled.nav`
    background: #15171c;
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 5;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

//SIDEBAR WRAP 
const SidebarWrap = styled.div`
    width: 100%;
`;

//SIDEBAR
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>

                {/* NavBar Part */}

                <Nav>

                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={showSidebar}/> 
                    </NavIcon>

                    <h1><a href="/pages/home" className="navbar-logo">CourDevelops</a>
                        {/* <i className="fas fa-code"></i> */}
                    </h1>

                    <div className="nav-links">
                       

                    </div>

                    
                    <ul className="nav-menu">
                        {ToDos.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                        
                    </ul>

                    <Button>Account</Button>

                </Nav>


                {/* SideBar Part */}
                

                    <SidebarNav sidebar={sidebar}>
                        
                        <SidebarWrap>
                        <Scrollbars style={{ width: 300, height: 1000 }}>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} />;
                            })}
                            </Scrollbars>
                        </SidebarWrap>
                        

                    </SidebarNav>

                
            </IconContext.Provider>
        </>
    );
};

export default Sidebar

