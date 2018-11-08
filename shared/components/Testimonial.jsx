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

            <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--largepadding'>
                <div className='mo-grid'>
                    <p className='mo-textitalic'>
                        {'Samuel can best be described as the glue between designers and developers. '}
                        {'Samuel is a great asset when you need responsive interfaces for demanding projects. '}
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
            <div className='mo-colorwrap mo-colorwrap--athensgrey mo-colorwrap--largepadding'>
                <div className='mo-grid'>
                    <p className='mo-textitalic'>I have no doubt in saying that Samuel was key in one of our biggest projects. A pioneer that brought not only great technical skills but also clarity, an eye for detail and organisation into the future of the Adidas Design Language. In my eyes, I consider Samuel as a Design Systems Advocate and a true wingman that only brings positivism and perspective to any UX|UI|Dev project.
                    </p>
                    <div className='mo-authorimage mo-authorimage--small'>
                        <img
                            className='mo-authorimage__image'
                            src='/static/images/marco.jpg'
                            alt='Marco Cardoso'
                        />
                    </div>
                    <p>- Marco Cardoso, Senior UI Lead Developer at <a href='http://adidas.com' target='_blank' className='mo_linkicon__link'>Adidas</a></p>
                </div>
            </div>
            <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--largepadding'>
                <div className='mo-grid'>
                    <p className='mo-textitalic'>
                        {'Samuel worked on a high pressure globally visible project for one of the biggest sports manufacturers in the world. As a key member of the team implementing a facelift for their entire eCom site and developing a digital style guide alongside, he got only praise from everyone he worked with. Samuel brought clarity and direction to the project with his patience, experience and competence. Samuel has a rare skillset of being an expert in both UX design and front-end development combined with great social skills and a get things done attitude. I really hope I get a chance to work with him again in the future.'}
                        <br />
                    </p>

                    <div className='mo-authorimage mo-authorimage--small'>
                        <img
                            className='mo-authorimage__image'
                            src='/static/images/samuli.jpg'
                            alt='Samuli Karjula'
                        />
                    </div>
                    <p>- Samuli Karjula, Director of Operations at <a href='http://reaktor.com' target='_blank' className='mo_linkicon__link'>Reaktor B.V. Amsterdam</a></p>
                </div>
            </div>
        </div>
    );
}
