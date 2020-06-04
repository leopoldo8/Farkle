import React, { useReducer, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  user: {},
  auth: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INITIAL_DATA':
      return {
        ...state,
        ...action.payload
      };
    
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };

    case 'SET_AUTH':
      return {
        ...state,
        auth: action.payload
      };

    default:
      return state;
  }
};

const UserContext = createContext(initialState);

const UserProvider = ({ children, value }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: 'SET_INITIAL_DATA',
      payload: value,
    });
  }, [value]);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({
    user: PropTypes.any,
    auth: PropTypes.bool
  })
};

UserProvider.defaultProps = {
  value: initialState
}

export { UserProvider, initialState };
export default UserContext;
