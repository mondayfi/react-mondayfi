import React from 'react';
import { companyInfo } from '../config';

export default function FooterLove() {
    return (
        <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--smallpadding'>
            <div className='mo-grid'>
                <p className='mo-textaligncenter'>
                    {'Made with '}
                    <i className='mo-icon mo-icon--heart mo_heartred'></i>
                    {` in ${companyInfo.city}`}
                </p>
            </div>
        </div>
    );
}
