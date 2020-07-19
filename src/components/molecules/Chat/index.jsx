import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import bxsSend from '@iconify/icons-bx/bxs-send';

import TextInput from '@components/atoms/TextInput';

import {
  ChatWrapper,
  ChatList,
  ChatInputContainer,
  ChatSend,
  Message,
  Author
} from './style';

const Chat = ({ messages, onMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = () => {
    onMessage(message);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onMessage(message);
    }
  }

  return (
    <ChatWrapper>
      <ChatList>
        {messages.map((message) => (
          <div key={message.message}>
            <Message fromSystem={message.systemMessage}>
              {message.message}
            </Message>
            {!message.systemMessage && (
              <Author>{message.from}</Author>
            )}
          </div>
        ))}
      </ChatList>
      <ChatInputContainer>
        <TextInput value={message} onChange={handleChange} onKeyPress={handleKeyPress} placeholder="Digite uma mensagem..." size="large" elevation="none" />
        <ChatSend onClick={handleSubmit}>
          <Icon icon={bxsSend} style={{color: '#ffffff', fontSize: '18px'}} />
        </ChatSend>
      </ChatInputContainer>
    </ChatWrapper>
  );
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    from: PropTypes.string,
    message: PropTypes.string,
    systemMessage: PropTypes.bool
  })).isRequired,
  onMessage: PropTypes.func.isRequired
}

export default Chat;
