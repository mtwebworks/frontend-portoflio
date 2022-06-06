import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

import signet from '../../img/sygnet.svg'

import './Footer.module.scss';

const Footer = () => {
    const section = useRef(null);
    const intersection = useIntersection(section, {
        root: null,
        rootMargin: "0px",
        threshold: .4
    })

    const slideAnimation = (element) => {
        gsap.to(element, 1.5, {
            autoAlpha: 1,
            ease: 'power1.out',
            delay: .5
        })
    }

    intersection && intersection.intersectionRatio > .4 ? slideAnimation('.footer__animation-element') : null;

    return (
        <footer ref={section} className='footer footer__animation-element'>
            <img className='footer__img' src={signet} alt='' />
            <div className='footer__links'>
                <a className='footer__link' href='https://www.linkedin.com/in/mtjakubek/' target='_blank'>linkedin</a>
                <span className='footer__x'>×</span>
                <a className='footer__link' href='https://github.com/mtwebworks' target='_blank'>github</a>
                <span className='footer__x'>×</span>
                <a className='footer__link' href='https://www.behance.net/mtjakubek' target='_blank'>behance</a>
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