import React, { useReducer, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  auth: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.payload
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

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { UserProvider };
export default UserContext;
