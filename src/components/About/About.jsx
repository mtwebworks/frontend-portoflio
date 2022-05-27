import React from 'react';
import { Link } from 'react-scroll';

import './About.module.scss';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about__content-container'>
        <div className='about__title-container'>
          <h2 className='about__title'><span className={'about__title--accent'}>Hello!</span><br />
            I’m Mateusz Jakubczyk</h2>
          <hr className='about__hr' />
        </div>
        <div className='about__text-container'>
          <p className='about__text'>I am ambitious front-end developer with over a year of expirience and over 10 years expirience working as graphic desgner in creative agencies. I love to design, but i like to   bring designs alive even more.<br /><br />I strive for simplicity, clarity and originality in my work through designs where every decision is well thought and implemented to achieve set goals.</p>
          <a className='about__link about__link--accent' href='' target="_blank" rel="noopener noreferrer">resume</a>
          <Link className='about__link' to='contact' smooth={true} duration={1000}>contact</Link>

        </div>
        <div className='about__vr'></div>
        <div className='about__techstack'>
          <h3 className='about__subtitle'>techstack</h3>
          <p className='about__text'>html <span className='about__x'>×</span>
            &nbsp;css <span className='about__x'>×</span>
            &nbsp;scss <span className='about__x'>×</span>
            &nbsp;bem <span className='about__x'>×</span>
            &nbsp;java script <span className='about__x'>×</span> react <span className='about__x'>×</span>
            &nbsp;mobx <span className='about__x'>×</span>
            &nbsp;redux <span className='about__x'>×</span>
            &nbsp;git <span className='about__x'>×</span>
            &nbsp;webpack <span className='about__x'>×</span>
            &nbsp;gsap</p>

          <h3 className='about__subtitle'>Tools</h3>
          <p className='about__text'>vscode <span className='about__x'>×</span>
            &nbsp;photoshop <span className='about__x'>×</span>
            &nbsp;illustrator <span className='about__x'>×</span>
            &nbsp;xD</p>

          <h3 className='about__subtitle'>Scocial Links</h3>
          <p className='about__text'>
            <a className='about__social-link' href='https://www.linkedin.com/in/mtjakubek/'>linkedin</a><span className='about__links-x'>×</span>
            <a className='about__social-link' href='https://github.com/mtwebworks'>github</a><span className='about__links-x'>×</span>
            <a className='about__social-link' href='https://www.behance.net/mtjakubek'>behance</a></p>
        </div>
      </div>
    </section>
  );
}

export default About;