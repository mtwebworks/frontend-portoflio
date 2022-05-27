import React from 'react';

import signet from '../../img/sygnet.svg'

import './Footer.module.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <img className='footer__img' src={signet} alt='' />
            <div className='footer__links'>
                <a className='footer__link' href='https://www.linkedin.com/in/mtjakubek/'>linkedin</a>
                <span className='footer__x'>×</span>
                <a className='footer__link' href='https://github.com/mtwebworks'>github</a>
                <span className='footer__x'>×</span>
                <a className='footer__link' href='https://www.behance.net/mtjakubek'>behance</a>
                {/* <span className='footer__x'>×</span>
                <a className='footer__link' href="">instagram</a> */}
            </div>
            <hr className='footer__hr' />
            <div className='footer__copyright'>
                <p>© 2022 All rights reserved.</p>
                <p>Designed × Built by Mateusz Jakubczyk </p>
            </div>
        </footer>
    );
}

export default Footer;