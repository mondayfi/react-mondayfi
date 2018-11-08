import React from 'react';
import config from '../config';

export default function WhoWeAre() {
    const info = config.personnelInfo.samuel;

    return (
        <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--white--border'>
            <div className='mo-grid'>
                <div className='mo-stand-alone'>
                    <div className='mo-authorimage mo-authorimage--stand-alone'>
                        <img
                            className='mo-authorimage__image'
                            src='/static/images/samuel.jpg'
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
                        <span className='mo_linkicon__link'>{'LinkedIn'}</span>
                    </a>
                </div>
                <h2 className='mo-stand-alone__title'>{`${info.firstName} ${info.lastName}`}</h2>
                <h3 className='mo-stand-alone__sub-title'>{info.title}</h3>
                <p>{'Tjena! I\'m Samuel, a developer with a passion for creating products with extraordinary UX.'}</p>
                <p>{'You could call me a front-end/UI/web developer, but I have a background in design, meaning I\'m quite the multitool when it comes to creating digital products.'}</p>
                <p>{'I\'m quite fond of React, but I\'ve also worked extensively with Angular, Backbone and some other frameworks. Style guides and pattern libraries is something I\'ve been pushing early on.'}</p>
                <p>{'I have worked with AB-testing & analytics, but previously also in games namely creating the UI and HUD systems for Remedy Entertainment\'s newest shooter.'}</p>
            </div>
        </div>
    );
}
