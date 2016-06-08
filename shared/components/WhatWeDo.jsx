import React, { Component } from 'react';

export default class WhatWeDo extends Component {
    render() {
        return (
            <div className='mo-colorwrap mo-colorwrap--white'>
                <div className='mo-grid'>
                    <h2>What we do</h2>
                    <p>
                        {'We are an '}
                        <strong>{'independent studio'}</strong>
                        {' in Helsinki packed with experience and insight.'}
                        {"We create razor sharp services that match the demand of today's users. "}
                    </p>
                    <p>
                        {'We work closely together with our clients to produce the best possible software for '}
                        <strong>{'human'}</strong>
                        {' beings.'}
                    </p>
                    <p>When your Mondays suck and you demand better, </p>
                    <a href='#contact' className='mo-button mo-button--purple mo-button--margintopminor'>Contact us</a>
                </div>
            </div>
        );
    }
}
