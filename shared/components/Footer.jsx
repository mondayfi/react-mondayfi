import React, { Component } from 'react';

if (process.env.BROWSER) {
    require('./Footer.scss');
}

export default class Footer extends Component {
    render() {
        return (
            <div className='mo-colorwrap mo-colorwrap--white mo-colorwrap--white--border mo-colorwrap--smallpadding'>
                <div className='mo-grid'>
                    <div className='mo-flexbox'>
                        <div className='mo-flexbox__item'>
                            <p><strong>Monday Digital Oy</strong></p>
                            <p>Business ID: <br />2435962-4</p>
                        </div>
                        <div className='mo-flexbox__item'>
                            <p><a href='mailto:info@monday.fi' className='mo_linkicon__link'>info@monday.fi</a></p>
                            <p>Viides Linja 4, <br />00530 Helsinki</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
