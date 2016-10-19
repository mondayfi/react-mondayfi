import React from 'react';
import _ from 'lodash';
import { companyInfo } from '../config';

export default function SomeBlock() {
    const someLinks = companyInfo.someLinks;

    return (
        <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--white--border mo-colorwrap--nopadding'>
            <div className='mo-grid'>
                <div className='mo-footer'>
                    <div className='mo-footer__some'>
                        <ul className='mo-footer__some__ul'>
                            {
                                _.map(someLinks, (d, i) => {
                                    return (
                                        <li
                                            key={i}
                                            className='mo-footer__some__li'
                                        >
                                            <a
                                                href={d.link}
                                                className='mo-footer__some__item mo-footer__some__item--border'
                                                target='_blank'
                                            >
                                                <i className={`mo-icon ${d.iconClass}`}></i>
                                                <span className='mo-footer__some__text'>{d.displayName}</span>
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
