import React from 'react';

function SamuelPage() {
    return (
        <div>
            <div className='mo-hero mo-hero--narrow'>
                <div className='mo-hero__slide'>
                    <div className='mo-hero__content mo-grid'>
                        <a href='/'><img src='/static/images/monday_logo.svg' className='mo-hero__logo' /></a>
                    </div>
                </div>
            </div>
            <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--white--border'>
                <div className='mo-grid'>
                    <div className='mo-stand-alone'>
                        <div className='mo-authorimage mo-authorimage--stand-alone'>
                            <img
                                className='mo-authorimage__image'
                                src='/static/images/samuel.jpg'
                                alt='Samuel Klinkmann'
                            />
                        </div>
                        <a href='tel:+358404869209' className='mo_linkicon  mo_linkicon--black'>
                            <i className='mo-icon mo-icon--phone'></i>
                            <span className='mo_linkicon__link'>040 486 92 09</span>
                        </a>
                        <br />
                        <a href='mailto:samuel@monday.fi' className='mo_linkicon  mo_linkicon--black'>
                            <i className='mo-icon mo-icon--envelope'></i>
                            <span className='mo_linkicon__link'>samuel@monday.fi</span>
                        </a>
                        <br />
                        <a href='https://fi.linkedin.com/in/samuelklinkmann' className='mo_linkicon  mo_linkicon--black'><i className='mo-icon mo-icon--linkedin'></i><span className='mo_linkicon__link'>LinkedIn</span></a>
                    </div>
                    <h2 className='mo-stand-alone__title'>Samuel Klinkmann</h2>
                    <h3 className='mo-stand-alone__sub-title'>UX Developer</h3>
                    <p>I'm a Helsinki based creative with a strong tech knowledge.</p>

                    <p>
                        My main focus is to build razor sharp interfaces for the digital age.
                        I love working with creative people and learning from each respective fields.
                        When creating experiences I aim for everything to make perfect sense.
                    </p>

                    <p>
                        If you'd like to learn more about me, head over to:
                    </p>

                    <ul className='mo-inline-list'>
                        <li className='mo-inline-list__item'><a href='https://medium.com/@samuelklinkmann/' className='mo_linkicon mo_linkicon--black'><i className='mo-icon mo-icon--medium'></i><span className='mo_linkicon__link'>Medium</span></a></li>
                        <li className='mo-inline-list__item'><a href='https://twitter.com/samuelklinkmann' className='mo_linkicon mo_linkicon--black'><i className='mo-icon mo-icon--twitter'></i><span className='mo_linkicon__link'>Twitter</span></a></li>
                        <li className='mo-inline-list__item'><a href='http://open.spotify.com/user/klinkmann' className='mo_linkicon mo_linkicon--black'><i className='mo-icon mo-icon--spotify'></i><span className='mo_linkicon__link'>Spotify</span></a></li>
                    </ul>
                </div>
            </div>

            <div className='mo-colorwrap mo-colorwrap--purple mo-colorwrap--largepadding'>
                <div className='mo-grid'>

                    <p className='mo-textitalic'>
                        'Samuel can best be described as the glue between designers and developers.'
                        'Samuel is a great asset when you need responsive interfaces for demanding projects.'
                        'I can warmly recommend him.'
                        <br />
                    </p>

                    <div className='mo-authorimage mo-authorimage--small'>
                        <img
                            className='mo-authorimage__image'
                            src='/static/images/jouni.jpg'
                            alt='Jouni Linkola'
                        />
                    </div>
                    <p>- Jouni Linkola, Service Design lead at <a href='http://elisa.fi' target='_blank' className='mo_linkicon__link'>Elisa Oy</a></p>
                </div>
            </div>

            <div className='mo-colorwrap mo-colorwrap--athensgrey mo-colorwrap--largepadding'>
                <div className='mo-grid'>
                    <p className='mo-textitalic'>
                        'Samuel did a short project for Veikkaus.'
                        'He helped us to improve the usability of the Veikkaus.fi mobile page.'
                        'Samuel is a very competent UX developer and a good team player'
                        <br />
                    </p>
                    <div className='mo-authorimage mo-authorimage--small'>
                        <img
                            className='mo-authorimage__image'
                            src='/static/images/melina.jpg'
                            alt='Melina Kukkasela'
                        />
                    </div>
                    <p>- Melina Kukkasela, UX Lead at <a href='http://veikkaus.fi' target='_blank' className='mo_linkicon__link'>Veikkaus Oy</a></p>
                </div>
            </div>

            <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--white--border mo-colorwrap--nopadding '>
                <div className='mo-grid'>
                    <div className='mo-footer'>
                        <div className='mo-footer__some'>
                            <ul className='mo-footer__some__ul'>
                                <li className='mo-footer__some__li'><a href='https://www.facebook.com/mondaydigital' className='mo-footer__some__item mo-footer__some__item--border'  target='_blank'><i className='mo-icon mo-icon--facebook'></i><span className='mo-footer__some__text'>Facebook</span></a></li>
                                <li className='mo-footer__some__li'><a href='https://twitter.com/mondayfi' className='mo-footer__some__item mo-footer__some__item--border' target='_blank'><i className='mo-icon mo-icon--twitter'></i><span className='mo-footer__some__text'>LinkedIn</span></a></li>
                                <li className='mo-footer__some__li'><a href='https://www.linkedin.com/company/monday-digital-oy' className='mo-footer__some__item' target='_blank'><i className='mo-icon mo-icon--linkedin'></i><span className='mo-footer__some__text'>Twitter</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--smallpadding'>
                <div className='mo-grid'>
                    <p className='mo-textaligncenter'>Made with
                        <i className='mo-icon mo-icon--heart mo_heartred'></i>
                        in Helsinki.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SamuelPage;
