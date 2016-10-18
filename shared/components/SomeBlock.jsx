import React from 'react';

export default function SomeBlock() {
    return (
        <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--white--border mo-colorwrap--nopadding'>
            <div className='mo-grid'>
                <div className='mo-footer'>
                    <div className='mo-footer__some'>
                        <ul className='mo-footer__some__ul'>
                            <li className='mo-footer__some__li'>
                                <a href='https://www.facebook.com/mondaydigital' className='mo-footer__some__item mo-footer__some__item--border' target='_blank'>
                                    <i className='mo-icon mo-icon--facebook'></i>
                                    <span className='mo-footer__some__text'>Facebook</span>
                                </a>
                            </li>
                            <li className='mo-footer__some__li'>
                                <a href='https://twitter.com/mondayfi' className='mo-footer__some__item mo-footer__some__item--border' target='_blank'>
                                    <i className='mo-icon mo-icon--twitter'></i>
                                    <span className='mo-footer__some__text'>LinkedIn</span>
                                </a>
                            </li>
                            <li className='mo-footer__some__li'>
                                <a href='https://www.linkedin.com/company/monday-digital-oy' className='mo-footer__some__item' target='_blank'>
                                    <i className='mo-icon mo-icon--linkedin'></i>
                                    <span className='mo-footer__some__text'>Twitter</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
