import React, { Component } from 'react';

export default class WhoWeAre extends Component {
    render() {
        return (
            <div className='mo-colorwrap mo-colorwrap--purple'>
                <div className='mo-grid'>
                    <h2>Who we are</h2>
                    <p>
                        {'Monday is the vision of two guys who enjoyed working together '}
                        {'so much they decided to start their own thing.'}
                    </p>

                    <p>We are <strong>Pyry</strong> and <strong>Samuel</strong>.</p><br />
                    <div className='mo-flexbox' id='contact'>
                        <div className='mo-flexbox__item mo-flexbox__item--border mo-flexbox__item--centerphone'>
                            <div className='mo-authorimage mo-authorimage--left'>
                                <div className='mo-authorimage__imagefilter'></div>
                                <img className='mo-authorimage__image' src='images/pyry.jpg' alt='' />
                            </div>
                            <div className='mo-author'>Pyry Kovanen</div>
                            <a href='tel:+358408098364' className='mo_linkicon'>
                                <i className='fa fa-phone'></i>
                                <span className='mo_linkicon__link'>040 809 83 64</span>
                            </a>
                            <br />
                            <a href='mailto:pyry@monday.fi' className='mo_linkicon'>
                                <i className='fa fa-envelope'></i>
                                <span className='mo_linkicon__link'>pyry@monday.fi</span>
                            </a>
                            <br />
                            <a href='https://fi.linkedin.com/in/pyrykovanen' className='mo-button mo-button--white mo-button--margintop'>
                                <i className='fa fa-linkedin mo-button__icon'></i>
                                LinkedIn
                            </a>
                        </div>

                        <div className='mo-flexbox__item mo-flexbox__item--centerphone'>
                            <div className='mo-authorimage mo-authorimage--right'>
                                <div className='mo-authorimage__imagefilter'></div>
                                <img className='mo-authorimage__image' src='images/samuel.jpg' alt='' />
                            </div>
                            <div className='mo-author'>Samuel Klinkmann</div>
                            <a href='tel:+358404869209' className='mo_linkicon'>
                                <i className='fa fa-phone'></i>
                                <span className='mo_linkicon__link'>040 486 92 09</span>
                            </a>
                            <br />
                            <a href='mailto:samuel@monday.fi' className='mo_linkicon'>
                                <i className='fa fa-envelope'></i>
                                <span className='mo_linkicon__link'>samuel@monday.fi</span>
                            </a>
                            <br />
                            <a href='https://fi.linkedin.com/in/samuelklinkmann' className='mo-button mo-button--white mo-button--margintop'>
                                <i className='fa fa-linkedin mo-button__icon'></i>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
