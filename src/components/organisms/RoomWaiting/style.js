import styled from 'styled-components';
import { DisplayLarge, DisplayMedium } from '@assets/styles/typography';
import { DoveGray, White, Gray } from '@assets/styles/colors';
import { MediumElevation } from '@assets/styles/elevations';

export const Title = styled.h1`
  ${DisplayLarge};
  color: ${DoveGray};
  margin-bottom: 8px;
  text-indent: 16px;
`;

export const Description = styled.h2`
  ${DisplayMedium};
  color: ${DoveGray};
  max-width: 250px;
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  ${props => props.center && `
    justify-content: center;
    align-items: center;
    text-align: center;
  `}
  padding-top: 50px;
  height: 100%;
  width: 100%;
`;

export const PlayersWrapper = styled.div`
  background: ${White};
  border: 1px solid ${Gray};
  margin-bottom: 53px;
`;

export const PlayerRow = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

export const PlayerName = styled.p`

`;

export const PlayerLevel = styled.p`

`;

export const PlayerStatus = styled.p`

`;

export const ChatWrapper = styled.div`
  width: calc(100% - 32px);
  height: 343px;
  background: ${White};
  border-radius: 24px;
  ${MediumElevation};
  align-self: center;
  margin-bottom: 40px;
`;

export const ButtonContainer = styled.div`
  width: 172px;
  align-self: center;
`;
