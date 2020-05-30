import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';
import { Grey } from './colors';

const base = createGlobalStyle`
body {
  ${Paragraph}
  color: ${Grey};
}
`;

export default base;
