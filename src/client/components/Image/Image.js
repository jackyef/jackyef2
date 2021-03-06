import React, { useState } from 'react';
import { string } from 'prop-types';

import useImpression from '../../hooks/IOHooks/useImpression';
import { loadedImageClass } from './styles';

const Image = ({ src, placeholderSrc, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoadImage = () => {
    let dummy = new window.Image();
    
    dummy.src = src;

    dummy.onload = () => setLoaded(true);
    dummy.onerror = () => setError(true);
  }

  const imageRef = useImpression(handleLoadImage);
  const usedSrc = loaded && !error ? src : placeholderSrc;
  const classNames = loaded && !error ? `${loadedImageClass} ${className}` : className;

  return <img src={usedSrc} alt={alt} className={classNames} ref={imageRef} />;
}

Image.propTypes = {
  alt: string,
  className: string,
  placeholderSrc: string,
  src: string.isRequired,
};

Image.defaultProps = {
  alt: '',
  className: '',
  placeholderSrc: '',
};

export default Image;
