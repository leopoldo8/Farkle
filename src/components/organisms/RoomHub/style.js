import styled from 'styled-components';
import { ParagraphLarge, ParagraphMedium } from '@assets/styles/typography';
import { Black, Blue } from '@assets/styles/colors';

export const Title = styled.h1`
  ${ParagraphLarge};
  color: ${Black};
  margin-bottom: 24px;
`;

export const InputContainer = styled.div`
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  margin-top: 8px;
  width: 172px;
  margin: 0 auto;
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  width: 280px;
  text-align: center;
`;

export const Link = styled.a`
  ${ParagraphMedium}
  color: ${Blue};
  margin-top: 16px;
  display: inline-block;
  cursor: pointer;
`;
