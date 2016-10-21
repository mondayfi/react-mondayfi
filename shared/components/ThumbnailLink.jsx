import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function ThumbnailLink(props) {
    const { slug, thumb, isCurrent } = props;
    const debuggingStyle = !isCurrent ? {} :
    {
        borderColor: '#fff'
    };

    return (
        <Link to={`/vlog/${slug}`} className='mo-thumbnail' style={ debuggingStyle } >
            <img src={thumb} className='mo-thumbnail__img' ></img>
        </Link>
    );
}
ThumbnailLink.propTypes = {
    slug:    PropTypes.string.isRequired,
    thumb:   PropTypes.string.isRequired,
    isCurrent:   PropTypes.bool
};

export default ThumbnailLink;
