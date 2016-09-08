import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Testimonial extends Component {
    render() {
        return (
            <div className='mo-colorwrap mo-colorwrap--athensgrey mo-colorwrap--largepadding'>
                <div className='mo-grid'>
                    <p className="mo-textitalic">{"I\'ve had the pleasure to work with Pyry & Samuel. They are great guys and always eager to push our web service forward with new and fresh ideas."}<br /></p>
                    <div className="mo-authorimage mo-authorimage--small mo-authorimage--margin-top"><img src="static/images/meri.jpg" alt="Meri Härmälä" className="mo-authorimage__image" /></div>
                    <p><strong>{'Meri Härmälä'}</strong><br />{'Web Service Manager at'} <a href="http://valio.fi" target="_blank" className="mo_linkicon__link">Valio</a></p>
                </div>
            </div>
        );
    }
}
