import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import { Search } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import Messages from './Messages';
import { useDispatch, useSelector } from 'react-redux';
import { incrementMessage } from '../features/messageSlice';
import { io } from 'socket.io-client';

const Wrapper = styled.div`
  flex: 0.77;
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(10, 150, 200, 0.05);
  display: flex;
  flex-direction: column;
  .top-container {
    flex: 0.08;
    height: 10vh;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .info-container-left {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px 15px;
    height: 40px;
    transition: all 0.3s ease-in;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    border-radius: 10px;
  }
  .info-container-right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 5px 15px;
    height: 40px;
    cursor: pointer;
  }
  .border {
    height: 35px;
    width: 0.5px;
    background-color: gray;
    margin: 0 5px;
  }
  .profile-icon-container {
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.4s ease-in-out;
    &:hover {
      scale: 1.1;
      color: white;
    }
  }
  .profile-icon {
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }
  .name-container {
    display: flex;
    flex-direction: column;
    height: 30px;
  }
  .name {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .status {
    font-size: 10px;
    font-weight: 400;
  }
  .message-container {
    overflow-y: auto;
    height: 77vh;
  }
  .typing-container {
    flex: 0.2;
    height: 50px;
    width: 97%;
    background-color: rgba(10, 150, 200, 0.07);
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;
  }
  .typing-container-left {
    margin-left: 20px;
  }
  .typing-container-middle {
    flex: 0.8;
    height: 30px;
    display: flex;
  }
  .typing-input {
    width: 90%;
    background: none;
    outline: none;
    border: none;
    font-size: 12px;
    &::placeholder {
      color: rgba(10, 150, 200, 1);
    }
  }
  .typing-container-right {
    flex: 0.15;
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: flex-end;
    margin-right: 20px;
  }
  .bottom-icons {
    transition: all 0.4s ease-in-out;
    &:hover {
      scale: 1.1;
    }
  }
  .no-image {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: rgba(10, 150, 200, 0.12);
  }
  .send-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const EndPoint = 'http://localhost:8000';
var socket;

const Chat = ({ value }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  var username = '';
  var pic = '';
  if (value) {
    username = value.username;
    pic = value.pic;
  }
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [messageReceived, setMessageReceived] = useState('');
  const [createResult, setCreateResult] = useState([]);
  const chatId = useSelector((state) => state.messages.id);

  useEffect(() => {
    socket = io(EndPoint);
    socket.emit('setup', userInfo);
    socket.on('connected', () => setSocketConnected(true));
  }, []);

  console.log(messageReceived);

  const data = {
    content: search,
    chatId,
  };

  useEffect(() => {
    socket.on('message Received', (message) => {
      setMessageReceived(message);
    });
  }, []);

  const addMessage = async (e) => {
    e.preventDefault();
    setSearch('');
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .post(`http://localhost:8000/api/message`, data, config)
      .then((response) => {
        setCreateResult(response.data);
        socket.emit('new message', search);
      });
  };

  const getMessages = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .get(`http://localhost:8000/api/message/${chatId}`, config)
      .then((response) => {
        setResult(response.data);
        socket.emit('join chat', chatId);
      });
  };

  useEffect(() => {
    getMessages();
  }, [chatId, search]);

  const [socketConnected, setSocketConnected] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <Wrapper>
      <>
        {/* TOP */}
        <div className="top-container">
          <div className="info-container-left">
            <div className="profile-icon-container">
              {loading ? (
                <div className="no-image"></div>
              ) : (
                <img src={pic} className="profile-icon" />
              )}
            </div>
            <div className="name-container">
              <div className="name">{username}</div>
              <div className="status">Online</div>
            </div>
          </div>
          <div className="info-container-right">
            <Search style={{ color: 'black', fontSize: '22px' }} />
            <div className="border"></div>
            <KeyboardArrowDownIcon
              style={{ color: 'black', fontSize: '22px' }}
            />
          </div>
        </div>
        {/* Middle */}
        <div className="message-container">
          {result.map((res) => (
            <Messages
              key={res._id}
              content={res.content}
              sender={res.sender._id}
            />
          ))}
        </div>
        {/* Bottom */}
        <form onSubmit={addMessage}>
          <div className="typing-container">
            <div className="typing-container-left">
              <KeyboardVoiceOutlinedIcon
                className="bottom-icons"
                style={{ cursor: 'pointer', color: 'rgba(10, 150, 200, 1)' }}
              />
            </div>
            <div className="typing-container-middle">
              <input
                className="typing-input"
                type="text"
                placeholder="Write a Message . . ."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="typing-container-right">
              <AddBoxRoundedIcon
                className="bottom-icons"
                style={{ cursor: 'pointer', color: 'rgba(10, 150, 200, 1)' }}
              />
              <div className="send-container" onClick={addMessage}>
                <SendRoundedIcon
                  className="bottom-icons"
                  style={{ cursor: 'pointer', color: 'rgba(10, 150, 200, 1)' }}
                />
              </div>
            </div>
          </div>
        </form>
      </>
    </Wrapper>
  );
};

export default Chat;
