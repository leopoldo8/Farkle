import styled from 'styled-components';
import { DisplayLarge, DisplayMedium } from '@assets/styles/typography';
import { DoveGray, White, Gray } from '@assets/styles/colors';

export const Title = styled.h1`
  ${DisplayLarge};
  color: ${DoveGray};
  margin-bottom: 8px;
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
