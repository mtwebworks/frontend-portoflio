import React from 'react';

import bg from '../../img/contact_img.png';

import './Contact.module.scss';

const Contact = () => {
    return (
        <section className="contact">
            <p className="contact__text">I'm always interested<br />
                about <span className="contact__accent">new&nbsp;projects.</span><br />
                Feel free to contact!<br />
                <a className='contact__mail' href="mailto:mt.webworks@gmail.com">mt.webworks [at] gmail.com</a>
            </p>
            <img className='contact__img' src={bg} alt="" />
        </section>
    );
}

export default Contact;