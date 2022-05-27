import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import logo from '../../img/jakubczyk_logo.svg';

import './Nav.module.scss'

const Nav = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSideBar = () => setIsSideBarOpen(!isSideBarOpen);

    const style = {
        open: 'nav__menu nav__menu--open',
        closed: 'nav__menu',
        active: 'menu-icon__burger-icon menu-icon__burger-icon--active',
        deactive: 'menu-icon__burger-icon',
    }
    return (
        <>

            <nav className={'nav'}>
                <img onClick={() => scroll.scrollToTop()} src={logo} alt="" className={'nav__logo'} />
                <ul className={isSideBarOpen ? style.open : style.closed}>
                    <li className={'nav__item'}>
                        <Link onClick={toggleSideBar} to='about' smooth={true} duration={1000} offset={-100}>about</Link>
                    </li>
                    <hr className='nav__hr' />
                    <li className={'nav__item'}>
                        <Link onClick={toggleSideBar} to='projects' smooth={true} duration={1000} offset={-100}>projects</Link>
                    </li>
                    <hr className='nav__hr' />
                    <li className={'nav__item'}>
                        <Link onClick={toggleSideBar} to='contact' smooth={true} duration={1000}>contact</Link>
                    </li>
                </ul>
            </nav>
            <div className={'menu-icon'} onClick={toggleSideBar} >
                <div className={isSideBarOpen ? style.active : style.deactive}></div>
            </div>

        </>
    );
}

export default Nav;