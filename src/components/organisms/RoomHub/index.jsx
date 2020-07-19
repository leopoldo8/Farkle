import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import UserContext from '@contexts/userContext';

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
  const { dispatch } = useContext(UserContext);
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
    const response = await RoomService.enter(data);
    if (response.status === 200) {
      dispatch({ type: 'SET_USER', payload: { username: data.username }});
      history.push(`room/${response.data.id}`);
    }
  }

  const handleCreateSubmit = async (data) => {
    const response = await RoomService.create(data);
    if (response.status === 201) {
      dispatch({ type: 'SET_USER', payload: { username: data.username }});
      history.push(`room/${response.data.id}`);
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
