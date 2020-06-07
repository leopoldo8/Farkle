import React from 'react';
import { useModal } from '@components/organisms/Modal';
import { DefaultModalContent } from '@components/organisms/Modal/style';

const AuthModal = () => {
  const { isOpen } = useModal('AuthModal');

  return (
    <DefaultModalContent isOpened={isOpen}>
      <p>Teste</p>
    </DefaultModalContent>
  )
}

export default AuthModal;
