import React from 'react';
if (process.env.BROWSER) {
    require('./Clients.scss');
}
export default function Testimonial() {
    return (
        <div>
            <div className='mo-colorwrap mo-colorwrap--purple mo-colorwrap--largepadding'>
                <div className='mo-grid'>
                    <h2 className='mo-stand-alone__title'>Selected clients</h2>
                    <div className='mo-logo-wall'>
                        <p>Here's some of the companies I have had the pleasure to work with.</p>

                        <div className='mo-clients'>
                            <div className='mo-clients__item'>
                                <a href='https://www.remedygames.com/' target='_blank'>
                                    <img className='mo-clients__img' src='/static/images/remedy.png' alt='Remedy' />
                                </a>
                            </div>
                            <div className='mo-clients__item'>
                                <a href='https://www.elisa.fi/' target='_blank'>
                                    <img className='mo-clients__img' src='/static/images/elisa.png' alt='Elisa' />
                                </a>
                            </div>
                            <div className='mo-clients__item'>
                                <a href='https://www.idean.com/' target='_blank'>
                                    <img className='mo-clients__img' src='/static/images/idean.png' alt='Idean' />
                                </a>
                            </div>
                            <div className='mo-clients__item'>
                                <a href='https://www.valio.com/' target='_blank'>
                                    <img className='mo-clients__img' src='/static/images/valio_white.png' alt='Valio' />
                                </a>
                            </div>
                            <div className='mo-clients__item'>
                                <a href='https://www.palmu.fi/' target='_blank'>
                                    <img className='mo-clients__img' src='/static/images/palmu.png' alt='Palmu' />
                                </a>
                            </div>
                            <div className='mo-clients__item'>
                                <a href='https://www.veikkaus.fi/' target='_blank'>
                                    <img className='mo-clients__img' src='/static/images/veikkaus.png' alt='Veikkaus' />
                                </a>
                            </div>
                            <div className='mo-clients__item'>
                                <a href='https://www.reaktor.com/' target='_blank'>
                                    <img className='mo-clients__img' src='/static/images/reaktor.png' alt='Reaktor' />
                                </a>
                            </div>
                            <div className='mo-clients__item'>
                                <a href='https://www.sc5.io/' target='_blank'>
                                    <img className='mo-clients__img' src='/static/images/sc5.png' alt='SC5' />
                                </a>
                            </div>
                            <div className='mo-clients__item'>
                                <a href='http://www.richen.fi/' target='_blank'>
                                    <img className='mo-clients__img' src='/static/images/richen.png' alt='Richen' />
                                </a>
                            </div>
                            <div className='mo-clients__item'>
                                <a href='https://www.remedygames.com/' target='_blank'>
                                    <img className='mo-clients__img' src='/static/images/valve.png' alt='Valve' />
                                </a>
                            </div>
                            <div className='mo-clients__item'>
                                <a href='https://www.remedygames.com/' target='_blank'>
                                    <img className='mo-clients__img' src='/static/images/ixonos.png' alt='Ixonos' />
                                </a>
                            </div>
                            <div className='mo-clients__item'>
                                <a href='https://www.remedygames.com/' target='_blank'>
                                    <img className='mo-clients__img' src='/static/images/nordkapp.png' alt='Nordkapp' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mo-colorwrap mo-colorwrap--athensgrey mo-colorwrap--largepadding'>
                <div className='mo-grid'>
                    <p className='mo-textitalic'>
                        {'Samuel can best be described as the glue between designers and developers.'}
                        {'Samuel is a great asset when you need responsive interfaces for demanding projects.'}
                        {'I can warmly recommend him.'}
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
            <div className='mo-colorwrap mo-colorwrap--skyblue mo-colorwrap--largepadding'>
                <div className='mo-grid'>
                    <p className='mo-textitalic'>
                        Samuel did a short project for Veikkaus.
                        He helped us to improve the usability of the Veikkaus.fi mobile page.
                        Samuel is a very competent UX developer and a good team player.
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
        </div>
    );
}
