import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import RoomEnter from '@components/molecules/RoomEnter';
import RoomCreate from '@components/molecules/RoomCreate';

import RoomService from '@api/services/room';

import {
  Title,
  ContentWrapper,
  PageWrapper,
  Link
} from './style';

const RoomHub = () => {
  const [hubType, setHubType] = useState('enter');
  const { t } = useTranslation('room');
  const history = useHistory();

  const toggleRoom = () => {
    if (hubType === 'enter') {
      setHubType('create');
    } else {
      setHubType('enter');
    }
  }

  const handleEnterSubmit = async (data) => {
    try {
      const response = await RoomService.create(data);
      if (response.status === 200) {
        history.push(`room/${response.data._id}`);
      }
    } catch(e) {
      console.log(e);
    }
  }

  const handleCreateSubmit = async (data) => {
    try {
      const response = await RoomService.create(data);
      if (response.status === 201) {
        history.push(`room/${response.data._id}`, { isOwner: true });
      }
    } catch(e) {
      console.log(e);
    }
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

export default RoomHub;
