import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Link } from 'react-scroll';
import hoverEffect from 'hover-effect'
import gsap from 'gsap';

import img from '../../img/about_img.png';
import displacementMap from '../../img/displacement_map_square.png';

import './About.module.scss';

const About = () => {
  let divHover = useRef(null);
  const section = useRef(null);
  const intersection = useIntersection(section, {
    root: null,
    rootMargin: "0px",
    threshold: .4
  })

  const slideAnimation = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      ease: 'power1.out',
      x: 0,
      stagger: {
        amount: 1
      },
      delay: .5
    })
  }

  intersection && intersection.intersectionRatio > .4 ? slideAnimation('.about__animation-element') : null;

  useEffect(() => {
    let distortion = new hoverEffect({
      parent: divHover,
      intensity: .25,
      image1: img,
      image2: img,
      displacementImage: displacementMap,
      angle: Math.PI / 16
    })
  }, [])

  return (
    <section ref={section} className='about' id='about'>
      <div ref={element => divHover = element} className="about__img about__animation-element" />
      <div className='about__content-container about__animation-element'>
        <div className='about__title-container'>
          <h2 className='about__title'><span className={'about__title--accent'}>Hello!</span><br />
            I’m Mateusz Jakubczyk</h2>
          <hr className='about__hr' />
        </div>
        <div className='about__text-container about__animation-element'>
          <p className='about__text'>I&nbsp;am ambitious front-end developer with over 2&nbsp;year of noncommercial expirience and almost 10&nbsp;years of expirience as a graphic designer in creative agencies. I&nbsp;love to design, but i&nbsp;also like to bring designs alive even more.<br /><br />I&nbsp;strive for simplicity, clarity and originality in my work through designs where every decision is well thought and implemented to achieve set goals.</p>
          <a className='about__link about__link--accent' href='./assets/CV_MateuszJakubczyk_EN22.pdf' target="_blank" rel="noopener noreferrer">resume</a>
          <Link className='about__link' to='contact' smooth={true} duration={1000}>contact</Link>

        </div>
        <div className='about__vr about__animation-element'></div>
        <div className='about__techstack about__animation-element'>
          <h3 className='about__subtitle'>techstack</h3>
          <p className='about__text'>html <span className='about__x'>×</span>
            &nbsp;css <span className='about__x'>×</span>
            &nbsp;scss <span className='about__x'>×</span>
            &nbsp;bem <span className='about__x'>×</span>
            &nbsp;gsap <span className='about__x'>×</span>
            &nbsp;javascript <span className='about__x'>×</span>
            &nbsp;react <span className='about__x'>×</span>
            &nbsp;mobx <span className='about__x'>×</span>
            &nbsp;redux <span className='about__x'>×</span>
            &nbsp;webpack <span className='about__x'>×</span>
            &nbsp;git
          </p>

          <h3 className='about__subtitle'>tools</h3>
          <p className='about__text'>vscode <span className='about__x'>×</span>
            &nbsp;photoshop <span className='about__x'>×</span>
            &nbsp;illustrator</p>

          <h3 className='about__subtitle'>scocial links</h3>
          <p className='about__text'>
            <a className='about__social-link' href='https://www.linkedin.com/in/mtjakubek/' target='_blank'>linkedin</a><span className='about__links-x'>×</span>
            <a className='about__social-link' href='https://github.com/mtwebworks' target='_blank'>github</a><span className='about__links-x'> ×</span>
            <a className='about__social-link' href='https://www.behance.net/mtjakubek' target='_blank'>behance</a></p>
        </div>
      </div>
    </section>
  );
}

export default About;