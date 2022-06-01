import React, { useEffect, useRef } from 'react';
import hoverEffect from 'hover-effect'

import bgImg1 from '../../img/contact_img_1.png';
import displacementMap from '../../img/displacement_map.png';

import './Contact.module.scss';

const Contact = () => {
    let backgroundImage = useRef(null);


    useEffect(() => {
        let distortion = new hoverEffect({
            parent: backgroundImage,
            intensity: .45,
            image1: bgImg1,
            image2: bgImg1,
            displacementImage: displacementMap,
            imagesRatio: 700 / 1900,
        })

        let canvas = document.getElementsByTagName('canvas')[1];
        canvas.classList.add('contact__canvas')

    })

    return (
        <section className="contact">
            <p className="contact__text">I'm always interested<br />
                about <span className="contact__accent">new&nbsp;projects.</span><br />
                Feel free to contact!<br />
                <a className='contact__mail' href="mailto:mt.webworks@gmail.com">mt.webworks [at] gmail.com</a>
            </p>

            <div ref={element => backgroundImage = element} className='contact__img'></div>
        </section>
    );
}

export default Contact;