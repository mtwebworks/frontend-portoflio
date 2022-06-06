import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import hoverEffect from 'hover-effect'
import gsap from 'gsap';

import kv from '../../img/kv.png';
import kvBackground from '../../img/kv_background.png';
import displacementMap from '../../img/displacement_map_square.png';

import './Header.module.scss';

const Header = () => {
  let imgWrapper = useRef(null)
  let divHover = useRef(null);
  let titleFirstLine = useRef(null);
  let titleSecondLine = useRef(null);
  let hr = useRef(null);
  let span = useRef(null);

  useEffect(() => {
    let kvImg = document.querySelector('.header__kv');

    divHover.style.height = kvImg.width + 'px';

    let distortion = new hoverEffect({
      parent: divHover,
      intensity: .1,
      image1: kvBackground,
      image2: kvBackground,
      displacementImage: displacementMap,
      angle: (Math.PI / 4) * 5,
    })

    let canvas = document.getElementsByTagName('canvas')[0];
    canvas.classList.add('header__canvas');

    const titleElements = [titleFirstLine, titleSecondLine, hr, span];
    gsap.from(titleElements, 1, { x: -250, autoAlpha: 0, stagger: .2, ease: 'power1.Out' })
    gsap.from(imgWrapper, 2, { x: -20, autoAlpha: 0, ease: "none", delay: .5 })
  }, [])

  return (
    <header className='header'>
      <div ref={element => imgWrapper = element} className={'header__img-wrapper'}>
        <img src={kv} className='header__kv' alt="kv background" />
        <div ref={element => divHover = element} className='header__hover-effect'></div>
      </div>
      <h1 className='header__title'>
        <span ref={element => titleFirstLine = element} >Designer&nbsp;×<br /></span>
        <span ref={element => titleSecondLine = element}>developer</span>
        <hr ref={element => hr = element} className='header__hr' />
        <span ref={element => span = element} className='header__subtitle'>Mateusz&nbsp;Jakubczyk</span>
      </h1>
      <Link className='header__scroll-down' to='about' smooth={true} duration={1000} offset={-100}></Link>
    </header>
  );
}

export default Header;