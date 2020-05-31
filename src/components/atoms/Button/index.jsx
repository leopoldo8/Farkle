import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './style';

const Button = ({ label, ...props }) => {
  return (
    <StyledButton {...props}>
      { label }
    </StyledButton>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  schema: PropTypes.oneOf(['primary'])
}

Button.defaultProps = {
  schema: 'primary'
}

export default Button;
