import React from 'react';
import { Icon } from '@iconify/react';
import bxsUserCircle from '@iconify/icons-bx/bxs-user-circle';
import { useModal } from '@components/organisms/Modal';
import {
  Container,
  Right,
  Center,
  Left,
  Logo
} from './style';

const Topbar = () => {
  const { open: openAuthModal } = useModal('AuthModal');

  /*
   * If the user is logged in, it'll open the user's options
   * Otherwise, it opens the auth modal
   */
  const handleAuthIconClick = () => {
    openAuthModal();
  }

  return (
    <Container>
      <Left />
      <Center>
        <Logo href="/" />
      </Center>
      <Right onClick={() => handleAuthIconClick()}>
        <Icon icon={bxsUserCircle} style={{fontSize: '24px'}} />
      </Right>
    </Container>
  );
}

export default Topbar;
