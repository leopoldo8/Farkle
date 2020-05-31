import React from 'react';
import {
  Container,
  Right,
  Center,
  Left,
  Logo
} from './style';

const Topbar = () => {
  return (
    <Container>
      <Right />
      <Center>
        <Logo href="/" />
      </Center>
      <Left />
    </Container>
  );
}

export default Topbar;
