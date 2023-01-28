import React from 'react';
import './Nav.styles.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Nav = () => {
  return (
    <>
      <nav className='navigation'>
        <NavLink className='logo-container' to='/'>
          <CrownLogo />
        </NavLink>
        <div className='nav-links-container'>
          <NavLink className='nav-link' to='/shop'>
            SHOP
          </NavLink>
          <NavLink className='nav-link' to='/about'>
            ABOUT
          </NavLink>
          <NavLink className='nav-link' to='/contact'>
            CONTACT
          </NavLink>
          <NavLink className='nav-link' to='/company'>
            COMPANY
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
