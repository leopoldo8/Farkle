import React from 'react';
import PropTypes from 'prop-types';
import StyledH1 from './style';

/**
 * Description of the component if needed
 */
const HelloWorld = ({ text }) => <StyledH1>{text}</StyledH1>;

HelloWorld.propTypes = {
  /** Text is required */
  text: PropTypes.string.isRequired,
};

export default HelloWorld;
