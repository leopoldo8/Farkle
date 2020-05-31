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
  error: PropTypes.string
}

TextInput.defaultProps = {
  error: null
}

export default TextInput;
