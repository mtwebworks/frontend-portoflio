import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import hoverEffect from 'hover-effect'

import kv from '../../img/kv.png';
import kvBackground from '../../img/kv_background.png';
import displacementMap from '../../img/displacement_map_square.png';

import './Header.module.scss';

const Header = () => {
  let divHover = useRef(null);


  useEffect(() => {
    let kvImg = document.querySelector('.header__kv');

    divHover.style.height = kvImg.width + 'px';

    console.log(divHover);
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

  }, [])

  return (
    <header className={'header'}>
      <div className={'header__img-wrapper'}>
        {/* <img src={kvBackground} className={'header__kv-background'} alt="kv background" /> */}
        <img src={kv} className={'header__kv'} alt="kv background" />
        <div ref={element => divHover = element} className={'header__hover-effect'}></div>
      </div>
      <h1 className={'header__title'}>
        Designer&nbsp;×<br />
        developer
        <hr className={'header__hr'} />
        <span className={'header__subtitle'}>Mateusz&nbsp;Jakubczyk</span>
      </h1>
      <Link className={'header__scroll-down'} to='about' smooth={true} duration={1000} offset={-100}></Link>
    </header>
  );
}

export default Header;