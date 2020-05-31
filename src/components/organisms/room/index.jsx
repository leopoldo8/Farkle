import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import RoomEnter from '@components/molecules/RoomEnter';
import RoomCreate from '@components/molecules/RoomCreate';

import {
  Title,
  ContentWrapper,
  PageWrapper,
  Link
} from './style';

const Room = ({ type }) => {
  const [hubType, setHubType] = useState('enter');
  const { t } = useTranslation('room');

  const toggleRoom = () => {
    if (hubType === 'enter') {
      setHubType('create');
    } else {
      setHubType('enter');
    }
  }

  const handleEnterSubmit = (data) => {
    console.log(data);
  }

  const handleCreateSubmit = (data) => {
    console.log(data);
  }

  const content = () => {
    switch (hubType) {
      case 'create':
        return <RoomCreate handleCreateSubmit={handleCreateSubmit} />

      case 'enter':
      default:
        return <RoomEnter handleEnterSubmit={handleEnterSubmit} />
    }
  }

  return (
    <PageWrapper>
      <ContentWrapper>
        <Title>{t(`${hubType}.title`)}</Title>
        {content()}
        <Link onClick={toggleRoom}>{t(`${hubType}.link`)}</Link>
      </ContentWrapper>
    </PageWrapper>
  )
}

Room.propTypes = {
  type: PropTypes.oneOf(['hub']).isRequired
}

export default Room;
