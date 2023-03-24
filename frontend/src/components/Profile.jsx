import { PieChartTwoTone } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { incrementId } from '../features/messageSlice';
import { incrementValue } from '../features/receiverSlice';

const Wrapper = styled.div`
  position: relative;
  .info-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px 15px;
    height: 60px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 0.5px;
    font-weight: 600;
    opacity: 0.7;
    padding: 10px 5px;
    position: relative;

    &:hover {
      opacity: 1;
      border-radius: 10px;
      background-color: rgba(100, 150, 200, 0.8);
      color: white;
    }
  }
  .img-container {
    cursor: pointer;
    height: 40px;
    width: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile-icon {
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }
  .data-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .name {
    font-size: 13px;
    font-weight: 700;
  }
  .message {
    font-size: 10px;
    padding-left: 2px;
    font-weight: 500;
  }
  .number-container {
    font-size: 8px;
    background-color: rgba(100, 150, 255, 1);
    border-radius: 50%;
    min-height: 15px;
    min-width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    position: absolute;
    right: 20px;
    padding: 4px;
    color: whitesmoke;
  }
  .no-image {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: rgba(10, 150, 200, 0.12);
  }
`;

const Profile = ({ value, id }) => {
  const navigate = useNavigate();
  const { username, pic } = value;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(incrementValue({ value }));
    // localStorage.setItem('chatId', id);
    dispatch(incrementId(id));
    navigate('/chats/message');
  };

  const [loading, setLoading] = useState(false);

  return (
    <Wrapper onClick={handleClick}>
      <div className=" info-container">
        <div className="profile-icon-container">
          {loading ? (
            <div className="no-image"></div>
          ) : (
            <img src={pic} className="profile-icon" />
          )}
        </div>
        <div className="data-container">
          <div className="name">{username}</div>
          <div className="message">{}</div>
        </div>
        {/* <div className="number-container">{}</div> */}
      </div>
    </Wrapper>
  );PieChartTwoTone
};

export default Profile;
