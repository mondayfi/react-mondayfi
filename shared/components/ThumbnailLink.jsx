import React from 'react';
import { Link } from 'react-router';

const ThumbnailLink = props => {
  const { slug, thumb, isCurrent } = props;
  const debuggingStyle = !isCurrent ? {} :
  	{
  		outline: '5px solid red'
  	}
  return (
    <Link to={`/vlog/${slug}`}>
      <img src={thumb} className='mo-hero__logo' style={ debuggingStyle } ></img>
    </Link>
  );
};

export default ThumbnailLink;
