import styled from 'styled-components';
import { Paragraph } from '@assets/styles/typography';
import { DarkGray, Error } from '@assets/styles/colors';

export const Input = styled.input`
  ${Paragraph}
  height: 40px;
  background: #FFFFFF;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  outline: 0;
  padding: 0 24px;
  width: 100%;
  border: 0;
  box-sizing: border-box;

  ${props => props.error && `
    border: 1px solid ${Error};
  `}

  &::placeholder {
    color: ${DarkGray};
  }
`;

export const ErrorLabel = styled.p`
  margin-top: 8px;
  ${Paragraph}
  color: ${Error};
  line-height: 16px;
`;
