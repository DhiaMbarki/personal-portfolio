import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/workExp' activeStyle>
            Work Experience
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact
          </NavLink>
        
         
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;
