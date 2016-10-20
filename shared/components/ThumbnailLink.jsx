import React from 'react';
import { Link } from 'react-router';

const ThumbnailLink = props => {
  const { slug, thumb, isCurrent } = props;
  const debuggingStyle = !isCurrent ? {} :
  	{
  		borderColor: '#fff'
  	}
  return (
    <Link to={`/vlog/${slug}`} className="mo-thumbnail" style={ debuggingStyle } >
      <img src={thumb} className='mo-thumbnail__img' ></img>
    </Link>
  );
};

export default ThumbnailLink;
