import React, { Suspense } from 'react';
import i18n from './i18n';
import Router from './router';
import { I18nextProvider } from 'react-i18next';
import { AppProvider } from '@contexts/appContext';

import GlobalStyles from '@modules/globalStyles';
import Topbar from '@components/atoms/Topbar';
import { Modal } from '@components/organisms/Modal';

import AuthModal from '@components/templates/AuthModal';

const Farkle = () => {
  return (
    <Suspense fallback="loading">
      <GlobalStyles />
      <I18nextProvider i18n={i18n}>
        <AppProvider>
          <Modal>
            <AuthModal />
          </Modal>
          <Topbar />
          <Router />
        </AppProvider>
      </I18nextProvider>
    </Suspense>
  );
};

export default Farkle;
