import React from 'react';
import Router from './router';
import { I18nextProvider } from 'react-i18next';
import GlobalStyles from '@modules/globalStyles';
import i18n from './i18n';

const Farkle = () => {
  return (
    <>
      <GlobalStyles />
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </>
  );
};

export default Farkle;
