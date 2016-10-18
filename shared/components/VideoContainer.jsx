import React, { Component, PropTypes } from 'react';

const YOUTUBE_EMBED_URI = 'https://www.youtube.com/embed/';
const YOUTUBE_EMBED_SETTINGS = '?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0';

export default class VideoContainer extends Component {
    static propTypes = {
        id           : PropTypes.string
    };
    render() {
        const { id } = this.props;
        const embedUrl = YOUTUBE_EMBED_URI + id + YOUTUBE_EMBED_SETTINGS;

        return (
            <div className='mo-video-container'>
                <iframe
                    width='640'
                    height='360'
                    src={embedUrl}
                    frameBorder={'0'}
                    allowFullScreen
                >
                </iframe>
            </div>
        );
    }
}
