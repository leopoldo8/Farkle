import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getLevelByExp } from '@modules/utils';

import RoomService from '@api/services/room';

import {
  Title,
  Description,
  PageWrapper,
  ContentWrapper,
  PlayersWrapper,
  PlayerRow,
  PlayerName,
  PlayerLevel,
  PlayerStatus
} from './style';

const RoomWaiting = () => {
  const [data, setData] = useState(null);
  const { t } = useTranslation('room');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await RoomService.getRoom(id);
      if (response.status === 200) {
        setData(response.data);
      }
    };
    fetchData();
  }, []);

  const LoadingContent = () => (
    <ContentWrapper center>
      <Title>{t('waiting.loading.title')}</Title>
      <Description>{t('waiting.loading.description')}</Description>
    </ContentWrapper>
  );

  const RoomContent = () => (
    <ContentWrapper>
      <Title>{t('waiting.players.title')}</Title>
      <PlayersWrapper>
        {data.players.map(player => (
          <PlayerRow>
            <div>
              <PlayerName>{ player.name }</PlayerName>
              {player.exp && <PlayerLevel>{ `Lv. ${getLevelByExp(player.exp)}` }</PlayerLevel>}
            </div>
            <PlayerStatus>{ t(`waiting.players.status.${player.isReady ? 'ready' : 'preparing'}`) }</PlayerStatus>
          </PlayerRow>
        ))}
      </PlayersWrapper>
    </ContentWrapper>
  );

  return (
    <PageWrapper>
      {data ? <RoomContent /> : <LoadingContent />}
    </PageWrapper>
  )
}

export default RoomWaiting;
