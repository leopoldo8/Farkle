import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import socketIOClient from "socket.io-client";

import UserContext from '@contexts/userContext';

import Button from '@components/atoms/Button';
import Chat from '@components/molecules/Chat';

import { getLevelByExp } from '@modules/utils';

import {
  Title,
  Description,
  PageWrapper,
  ContentWrapper,
  PlayersWrapper,
  PlayerRow,
  PlayerName,
  PlayerLevel,
  PlayerStatus,
  ButtonContainer
} from './style';

const RoomWaiting = () => {
  const { state } = useContext(UserContext);
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState(null);
  const [chat, setChat] = useState(null);
  const { t } = useTranslation('room');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!state.username) {
      history.push('/');
      return;
    }

    const newSocket = socketIOClient('http://localhost:3000', {
      query: {
        roomId: id,
        userName: state.username
      }
    });

    setSocket(newSocket);
  }, [id]);

  useEffect(() => {
    if (socket === null) return;

    socket.on('joinRoom', (newData) => {
      setChat(newData.chat);
      setData(newData);
    });

    socket.on('leftRoom', (newData) => {
      setChat(newData.chat);
      setData(newData);
    });

    socket.on('chatClient', (newChat) => {
      setChat(newChat);
    });
  }, [socket]);

  const LoadingContent = () => (
    <ContentWrapper center>
      <Title>{t('waiting.loading.title')}</Title>
      <Description>{t('waiting.loading.description')}</Description>
    </ContentWrapper>
  );

  const onMessage = (message) => {
    socket.emit('chatServer', {
      message
    });
  }

  const RoomContent = () => (
    <ContentWrapper>
      <Title>{t('waiting.players.title')}</Title>
      <PlayersWrapper>
        {data.players.map(player => (
          <PlayerRow key={player.name}>
            <div>
              <PlayerName>{ player.name }</PlayerName>
              {player.exp && <PlayerLevel>{ `Lv. ${getLevelByExp(player.exp)}` }</PlayerLevel>}
            </div>
            <PlayerStatus>{ t(`waiting.players.status.${player.isReady ? 'ready' : 'preparing'}`) }</PlayerStatus>
          </PlayerRow>
        ))}
      </PlayersWrapper>
      <Title>{t('waiting.chat.title')}</Title>
      <Chat messages={chat} onMessage={onMessage} />
      <ButtonContainer>
        <Button type="submit" label={t('waiting.button')} />
      </ButtonContainer>
    </ContentWrapper>
  );

  return (
    <PageWrapper>
      {data ? <RoomContent /> : <LoadingContent />}
    </PageWrapper>
  )
}

export default RoomWaiting;
