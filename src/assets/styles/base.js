import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';
import { Grey, Black } from './colors';

const base = createGlobalStyle`
html, body, #root {
  height: 100%;
}

body {
  font-family: 'Red Hat Display';
  ${Paragraph}
  color: ${Black};
}

#PagesContainer {
  background: ${Grey};
  height: calc(100% - 73px);
}
`;

export default base;
