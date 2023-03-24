import React, { useState } from 'react';
import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import ChatGroup from '../components/ChatGroup';
import { useSelector } from 'react-redux';
import Chat from '../components/Chat';

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;

const ChatPage = () => {
  const receiverData = useSelector((state) => state.receiver.receiverData);

  return (
    <Wrapper>
      <Dashboard />
      <ChatGroup />
      <Chat value={receiverData.value} />
    </Wrapper>
  );
};

export default ChatPage;
