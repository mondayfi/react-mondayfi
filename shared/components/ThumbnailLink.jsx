import React from 'react';
import { Link } from 'react-router';

const ThumbnailLink = props => {
  const { slug, thumb } = props;
  return (
    <Link to={`/vlog/${slug}`}>
      <img src={thumb} className='mo-hero__logo'></img>
    </Link>
  );
};

export default ThumbnailLink;
