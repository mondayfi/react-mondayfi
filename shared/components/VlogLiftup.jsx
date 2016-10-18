import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import VideoContainer from './VideoContainer.jsx';

function VlogLiftup(props) {
    const { _id, title, slug } = props;

    return (
        <div className='mo-colorwrap mo-colorwrap--athensgrey'>
            <div className='mo-grid'>
                <h2 style={{ marginTop: 0 }}>Our Vlog</h2>
                <h4 style={{ marginTop: 0 }}><Link to={`/vlog/${slug.en}`}>{title.en}</Link></h4>
                <VideoContainer id={_id} />
                <a href='https://www.youtube.com/channel/UCtHdo16gUUHRvBaYqwQisrQ' target='_blank' className='mo-button mo-button--purple mo-button--margintopminor'>Watch on YouTube&nbsp;›</a>
            </div>
        </div>
    );
}

VlogLiftup.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.object.isRequired,
    slug: PropTypes.object.isRequired
};

export default VlogLiftup;
