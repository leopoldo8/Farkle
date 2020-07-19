import styled from 'styled-components';
import { ParagraphSmall } from '@assets/styles/typography';
import { White, Gray, Green, DarkGray } from '@assets/styles/colors';
import { MediumElevation } from '@assets/styles/elevations';

export const ChatWrapper = styled.div`
  width: calc(100% - 32px);
  height: 343px;
  background: ${White};
  border-radius: 24px;
  ${MediumElevation};
  align-self: center;
  margin-bottom: 40px;
`;

export const ChatList = styled.div`
  overflow: scroll;
  height: calc(100% - 48px);
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

export const ChatInputContainer = styled.div`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border-top: 1px solid ${Gray};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-top: 1px;
  padding-right: 16px;
  overflow: hidden;
`;

export const ChatSend = styled.div`
  width: 28px;
  height: 28px;
  background: ${Green};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.div`
  width: 100%;
  color: ${DarkGray};
  text-align: center;
  ${props => props.fromSystem ? ParagraphSmall : `

  `}
`;

export const Author = styled.p`

`;
