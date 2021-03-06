import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const PageHead = ({ title, image, description, children }) => (
  <Helmet>
    <title>{`Farkle - ${title}`}</title>
    <meta property="og:site_name" content={`Farkle - ${title}`} />
    <meta property="og:image" content={image} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="description" content={description} />
    {children}
  </Helmet>
);

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.any),
};

PageHead.defaultProps = {
  children: [],
  image: '%PUBLIC_URL%/android-chrome-512x512.png',
  description: 'Jogue Farkle agora!'
};

export default PageHead;
