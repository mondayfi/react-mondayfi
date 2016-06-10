import React, { Component } from 'react';

export default class VlogLiftup extends Component {
    render() {
        return (
            <div className='mo-colorwrap mo-colorwrap--athensgrey'>
                <div className='mo-grid'>
                    <h2 style={{ marginTop: 0 }}>Our Vlog</h2>
                    <div className='mo-video-container'>
                        <iframe width='640' height='360' src='http://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=playlist&list=PLdREOGO0CSCoQsE2bQKTUo5pTOwlPUcO2'
                            frameBorder={'0'}
                            allowFullscreen
                        >
                        </iframe>
                    </div><a href='https://www.youtube.com/channel/UCtHdo16gUUHRvBaYqwQisrQ' target='_blank' className='mo-button mo-button--purple mo-button--margintopminor'>Watch on YouTube&nbsp;›</a>
                </div>
            </div>
        );
    }
}
