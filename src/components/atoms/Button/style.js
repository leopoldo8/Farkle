import styled from 'styled-components';
import { darken } from 'polished';

import { Green, White } from '@assets/styles/colors';
import { Label } from '@assets/styles/typography';

export default styled.button`
  height: 40px;
  border-radius: 8px;
  background: ${Green};
  border: 0;
  outline: 0;
  width: 100%;
  color: ${White};
  cursor: pointer;
  transition: .2s;
  ${Label}

  &:hover, &:focus {
    background: ${darken(.04, Green)}
  }

  &:active {
    background: ${darken(.08, Green)}
  }
`;
