import React from 'react';
import Hero from '../Hero.jsx';
import Footer from '../Footer.jsx';
import config from '../../config';

function PyryPage() {
    const info = config.personnelInfo.pyry;

    return (
        <div>
            <Hero />
            <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--white--border'>
                <div className='mo-grid'>
                    <div className='mo-stand-alone'>
                        <div className='mo-authorimage mo-authorimage--stand-alone'>
                            <img
                                className='mo-authorimage__image'
                                src='/static/images/pyry.jpg'
                                alt={`${info.firstName} ${info.lastName}`}
                            />
                        </div>
                        <a href={`tel:${info.phone.link}`} className='mo_linkicon  mo_linkicon--black'>
                            <i className='mo-icon mo-icon--phone'></i>
                            <span className='mo_linkicon__link'>{info.phone.display}</span>
                        </a>
                        <br />
                        <a href={`mailto:${info.email}`} className='mo_linkicon  mo_linkicon--black'>
                            <i className='mo-icon mo-icon--envelope'></i>
                            <span className='mo_linkicon__link'>{info.email}</span>
                        </a>
                        <br />
                        <a href={info.linkedinLink} className='mo_linkicon  mo_linkicon--black'>
                            <i className='mo-icon mo-icon--linkedin'></i>
                            <span className='mo_linkicon__link'>LinkedIn</span>
                        </a>
                    </div>
                    <h2 className='mo-stand-alone__title'>{`${info.firstName} ${info.lastName}`}</h2>
                    <h3 className='mo-stand-alone__sub-title'>{info.title}</h3>
                    <p>
                        I'm social and conscientious,
                        I'm not afraid of new challenges and
                        I'm eager to learn new things.
                        I'm good team worker,
                        but I am also efficient while working alone.
                        I tend to write as effective and clean code as possible,
                        without forgetting the end user’s experience.
                        I’ve worked with companies ranging from startups to biggest
                        customers in Finland.
                    </p>
                    <p>Some frameworks I have recently used:<br />
                        — React<br />
                        — node.js<br />
                        — Ampersand<br />
                        — etc.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PyryPage;
