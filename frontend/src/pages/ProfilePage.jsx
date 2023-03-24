import React, { useState } from 'react';
import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import ChatGroup from '../components/ChatGroup';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;

const ProfilePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/login');
  }
  const [select, setSelect] = useState('');
  return (
    <Wrapper>
      <Dashboard />
      <ChatGroup />
    </Wrapper>
  );
};

export default ProfilePage;
