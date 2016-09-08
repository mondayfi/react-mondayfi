import React, { Component } from 'react';
import { Link } from 'react-router';

export default class WhoWeAre extends Component {
    render() {
        return (
            <div className='mo-colorwrap mo-colorwrap--purple'>
                <div className='mo-grid'>
                    <h2>Who we are</h2>
                    <p>{'Monday is two guys who enjoyed working together so much they started their own thing.'}</p>
                    <p>{'Pyry has a wide range of experience, from UI development to Node.js back-ends. You could call him a Full Stack developer.'}</p>
                    <p>{'Samuel, with his design background really enjoys creating exceptionally well behaving responsive front-ends. You could call him a UX developer.'}</p>

                    <div className='mo-flexbox' id='contact'>
                        <div className="mo-flexbox__item mo-flexbox__item--border mo-flexbox__item--centerphone">
                        <a href="/pyry" className="mo-authorimage">
                          <div className="mo-authorimage__imagefilter"></div>
                          <img className="mo-authorimage__image" src="static/images/pyry.jpg" alt="Pyry Kovanen" />
                        </a>
                        <h3 className="mo-author">Pyry Kovanen</h3>
                        <a href="tel:+358408098364" className="mo_linkicon"><i className="mo-icon mo-icon--phone"></i><span className="mo_linkicon__link">040 809 83 64</span></a><br />
                        <a href="mailto:pyry@monday.fi" className="mo_linkicon"><i className="mo-icon mo-icon--envelope"></i><span className="mo_linkicon__link">pyry@monday.fi</span></a><br />
                        <a href="https://fi.linkedin.com/in/pyrykovanen" className="mo_linkicon"><i className="mo-icon mo-icon--linkedin"></i><span className="mo_linkicon__link">LinkedIn</span></a><br />
                        <a href="/pyry" className="mo-button mo-button--white mo-button--margintop">Read more</a>
                        </div>

                        <div className="mo-flexbox__item mo-flexbox__item--centerphone">
                        <a href="/samuel" className="mo-authorimage">
                          <div className="mo-authorimage__imagefilter"></div>
                          <img className="mo-authorimage__image" src="static/images/samuel.jpg" alt="Samuel Klinkmann" />
                        </a>
                        <h3 className="mo-author">Samuel Klinkmann</h3>
                        <a href="tel:+358404869209" className="mo_linkicon"><i className="mo-icon mo-icon--phone"></i><span className="mo_linkicon__link">040 486 92 09</span></a><br />
                        <a href="mailto:samuel@monday.fi" className="mo_linkicon"><i className="mo-icon mo-icon--envelope"></i><span className="mo_linkicon__link">samuel@monday.fi</span></a><br />
                        <a href="https://fi.linkedin.com/in/samuelklinkmann" className="mo_linkicon"><i className="mo-icon mo-icon--linkedin"></i><span className="mo_linkicon__link">LinkedIn</span></a><br />
                        <a href="/samuel" className="mo-button mo-button--white mo-button--margintop">Read more</a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
