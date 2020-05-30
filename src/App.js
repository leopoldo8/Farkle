import React from 'react';
import i18n from './i18n';
import Router from './router';
import { I18nextProvider } from 'react-i18next';

import GlobalStyles from '@modules/globalStyles';
import Topbar from '@components/Topbar';

const Farkle = () => {
  return (
    <>
      <GlobalStyles />
      <I18nextProvider i18n={i18n}>
        <Topbar />
        <Router />
      </I18nextProvider>
    </>
  );
};

export default Farkle;
