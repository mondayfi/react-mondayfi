import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import VideoContainer from './VideoContainer.jsx';

function VlogLiftup(props) {
    const { _id, title, slug, type } = props;    
    
    const jsx = {
        front: (
            <div className='mo-colorwrap mo-colorwrap--athensgrey'>
                <div className='mo-grid'>
                    <h2><Link to={`/vlog/${slug.en}`}>{title.en}</Link></h2>
                    <VideoContainer id={_id} />
                    <a href='https://www.youtube.com/channel/UCtHdo16gUUHRvBaYqwQisrQ' target='_blank' className='mo-button mo-button--purple mo-button--margintopminor'>Watch on YouTube&nbsp;›</a>
                </div>
            </div>
        ),
        other: (
            <div>
                <h2><Link to={`/vlog/${slug.en}`}>{title.en}</Link></h2>
                <VideoContainer id={_id} />
                <a href='https://www.youtube.com/channel/UCtHdo16gUUHRvBaYqwQisrQ' target='_blank' className='mo-button mo-button--purple mo-button--margintopminor'>Watch on YouTube&nbsp;›</a>
            </div>
        )
    };

    return jsx[type];
}

VlogLiftup.propTypes = {
    _id: PropTypes.string.isRequired,
    title: PropTypes.object.isRequired,
    slug: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
};

VlogLiftup.defaultProps = {
    type: 'other'
};

export default VlogLiftup;
