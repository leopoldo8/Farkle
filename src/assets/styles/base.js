import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';
import { Gray, Black } from './colors';

const TopPageBackground = '/static/images/TopPage.svg';

const base = createGlobalStyle`
html, body, #root, .page {
  height: 100%;
}

#root {
  overflow: hidden;
}

body {
  font-family: 'Red Hat Display';
  ${Paragraph}
  color: ${Black};
}

#PagesContainer {
  background: ${Gray};
  height: calc(100% - 90px);
  position: relative;
  margin-top: 17px;

  #PagesTopClip {
    position: absolute;
    top: -26px;
    width: 100%;
    height: 26px;
    background: url(${TopPageBackground}) no-repeat;
    background-size: cover;
  }
}
`;

export default base;
