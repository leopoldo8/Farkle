import React from 'react';
import PropTypes from 'prop-types';
import { Input, ErrorLabel } from './style';

const TextInput = ({ error, ...props }) => {
  return (
    <>
      <Input
        error={error}
        {...props}
      />
      {error ? (
        <ErrorLabel>
          { error }
        </ErrorLabel>
      ) : null}
    </>
  )
}

TextInput.propTypes = {
  error: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  elevation: PropTypes.oneOf(['none', 'normal'])
}

TextInput.defaultProps = {
  error: null,
  size: 'medium',
  elevation: 'normal'
}

export default TextInput;
