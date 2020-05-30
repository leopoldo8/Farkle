import React from 'react';
import { useTranslation } from 'react-i18next';

import HelloWorld from '@components/HelloWorld';

const Home = () => {
  const { t } = useTranslation(['home']);

  return (
    <div>
      <h1>/home</h1>
      <HelloWorld text={t('title')} />
    </div>
  );
};

export default Home;
