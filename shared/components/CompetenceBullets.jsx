import React, { Component } from 'react';

export default class CompetenceBullets extends Component {
    render() {
        return (
            <div>
                <div className='mo-colorwrap mo-colorwrap--athensgrey'>
                    <div className='mo-grid'>
                        <h2 style={{ marginTop:0 }}>Newsletter</h2>
                        <p>{'We do a weekly show on Youtube. Get our latest episode delivered to your email, once a week.'}</p>
                        <a href='http://newsletter.monday.fi/' className='mo-button mo-button--purple'>Order our newsletter</a>
                    </div>
                </div>
                <div className='mo-colorwrap mo-colorwrap--white'>
                    <div className='mo-grid '>
                        <h2>We can help you with</h2>
                        <p>
                            — Full-stack web development <br />
                            — Component-driven development<br />
                            — Style guide development<br />
                            — Front-end evaluation<br />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
