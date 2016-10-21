import React from 'react';
import _ from 'lodash';
import config from '../config';

export default function WhoWeAre() {
    const personnel = _(config.personnelInfo).keys().sort().reverse().value();

    return (
        <div className='mo-colorwrap mo-colorwrap--purple'>
            <div className='mo-grid'>
                <h2>Who we are</h2>
                <p>{'Monday is two guys who enjoyed working together so much they started their own thing.'}</p>
                <p>
                    {'Pyry has a wide range of experience, from UI development to Node.js back-ends.'}
                    {'You could call him a Full Stack developer.'}
                </p>
                <p>
                    {'Samuel, with his design background really enjoys creating exceptionally'}
                    {'well behaving responsive front-ends. You could call him a UX developer.'}
                </p>

                <div className='mo-flexbox' id='contact'>
                    {
                        _.map(personnel, (key, i) => {
                            const person = config.personnelInfo[key];

                            return (
                                <div
                                    key={key}
                                    className='mo-flexbox__item mo-flexbox__item--border mo-flexbox__item--centerphone'
                                >
                                    <a href={`/${key}`} className='mo-authorimage'>
                                        <img
                                            className='mo-authorimage__image'
                                            src={`static/images/${key}.jpg`}
                                            alt={`${person.firstName}  ${person.lastName}`}
                                        />
                                    </a>
                                    <h3 className='mo-author'>{`${person.firstName}  ${person.lastName}`}</h3>
                                    <a href={`tel:${person.phone.link}`} className='mo_linkicon'>
                                        <i className='mo-icon mo-icon--phone'></i>
                                        <span className='mo_linkicon__link'>{`${person.phone.display}`}</span>
                                    </a>
                                    <br />
                                    <a href={`email:${person.email}`} className='mo_linkicon'>
                                        <i className='mo-icon mo-icon--envelope'></i>
                                        <span className='mo_linkicon__link'>{`${person.email}`}</span>
                                    </a>
                                    <br />
                                    <a href={`${person.linkedinLink}`} className='mo_linkicon' >
                                        <i className='mo-icon mo-icon--linkedin'></i>
                                        <span className='mo_linkicon__link'>LinkedIn</span>
                                    </a>
                                    <br />
                                    <a
                                        href={`/${key}`}
                                        className='mo-button mo-button--white mo-button--margintop'
                                    >
                                        Read more
                                    </a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
