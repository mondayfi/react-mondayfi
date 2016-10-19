import React, { Component } from 'react';
import SomeBlock from './SomeBlock.jsx';
import FooterLove from './FooterLove.jsx';
import { companyInfo } from '../config';

if (process.env.BROWSER) {
    require('./Footer.scss');
}

export default class Footer extends Component {
    render() {
        return (
            <div>
                <SomeBlock />
                <div
                    className='mo-colorwrap mo-colorwrap--white mo-colorwrap--white--border mo-colorwrap--smallpadding'
                >
                    <div className='mo-grid'>
                        <div className='mo-flexbox'>
                            <div className='mo-flexbox__item'>
                                <p><strong>{companyInfo.officialName}</strong></p>
                                <p>Business ID: <br />{companyInfo.businessId}</p>
                            </div>
                            <div className='mo-flexbox__item'>
                                <p>
                                    <a href={`mailto:${companyInfo.contactEmail}`} className='mo_linkicon__link'>
                                        {companyInfo.contactEmail}
                                    </a>
                                </p>
                                <p>
                                    {companyInfo.streetAddress},
                                    <br />
                                    {`${companyInfo.postalCode} ${companyInfo.city}`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterLove />
            </div>
        );
    }
}
