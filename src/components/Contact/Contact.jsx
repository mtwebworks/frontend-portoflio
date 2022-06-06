import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import hoverEffect from 'hover-effect'
import gsap from 'gsap';

import bgImg1 from '../../img/contact_img.png';
import displacementMap from '../../img/displacement_map.png';

import './Contact.module.scss';

const Contact = () => {
    const section = useRef(null);
    let backgroundImage = useRef(null);

    const intersection = useIntersection(section, {
        root: null,
        rootMargin: "0px",
        threshold: .4
    })

    const slideAnimation = (element) => {
        gsap.to(element, 1, {
            ease: 'power1.out',
            autoAlpha: 1,
            y: 0,
            stagger: {
                amount: 1,
            }
        })
    }

    intersection && intersection.intersectionRatio > .4 ? slideAnimation('.contact__animation-element') : null;

    useEffect(() => {
        let distortion = new hoverEffect({
            parent: backgroundImage,
            intensity: .2,
            image1: bgImg1,
            image2: bgImg1,
            displacementImage: displacementMap,
            imagesRatio: 630 / 1445,
        })
    }, [])

    return (
        <section ref={section} className="contact">
            <p className="contact__text ">
                <span className='contact__span'>
                    <span className='contact__animation-element'>I'm always interested<br /></span>
                </span>
                <span className='contact__span'>
                    <span className='contact__animation-element'> about <span className="contact__accent">new&nbsp;projects.</span><br /></span>
                </span>
                <span className='contact__span'>
                    <span className='contact__animation-element'>Feel free to contact!<br /></span>
                </span>
                <span className='contact__span'>
                    <a className='contact__mail contact__animation-element' href="mailto:mt.webworks@gmail.com">mt.webworks [at] gmail.com</a>
                </span>
            </p>

            <div ref={element => backgroundImage = element} className='contact__img'></div>
        </section>
    );
}

export default Contact;