import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';
import { Grey } from './colors';

const base = createGlobalStyle`
body {
  font-family: 'Red Hat Display';
  ${Paragraph}
  color: ${Grey};
}
`;

export default base;
