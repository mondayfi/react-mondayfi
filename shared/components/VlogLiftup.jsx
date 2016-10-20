import React, { Component } from 'react';
import { Link } from 'react-router';
import VideoContainer from './VideoContainer.jsx';

export default class VlogLiftup extends Component {
    render() {
        const { _id, title, description, time, slug } = this.props;
        return (
            <div className='mo-colorwrap mo-colorwrap--athensgrey'>
                <div className='mo-grid'>
                    <h2><Link to={`/vlog/${slug.en}`}>{ title.en }</Link></h2>
                    <VideoContainer id={_id} />
                    <a href='https://www.youtube.com/channel/UCtHdo16gUUHRvBaYqwQisrQ' target='_blank' className='mo-button mo-button--purple mo-button--margintopminor'>Watch on YouTube&nbsp;›</a>
                </div>
            </div>
        );
    }
}
