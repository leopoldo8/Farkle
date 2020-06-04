import styled from 'styled-components';

const TopBarBackground = '/static/images/Topbar.png';
const LogoURL = '/static/images/Logo.svg';

export const Container = styled.div`
  height: 73px;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 16px;
  display: grid;
  grid-template-areas: "left center right";
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  background: url(${TopBarBackground});
  background-size: contain;
`;

export const Logo = styled.a`
  height: 40px;
  width: 125px;
  background: url(${LogoURL}) no-repeat;
  padding-bottom: 14px;
`;

export const Right = styled.div`
  grid-area: right;
  width: 100%;
  min-width: 26px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Left = styled.div`
  grid-area: left;
  width: 100%;
  min-width: 26px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Center = styled.div`
  grid-area: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
