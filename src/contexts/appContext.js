import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  modal: {
    isOpened: false,
    options: null,
    component: null
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        modal: {
          isOpened: true,
          component: action.component,
          options: action.options
        },
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpened: false,
        },
      };

    default:
      return state;
  }
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider };
export default AppContext;
