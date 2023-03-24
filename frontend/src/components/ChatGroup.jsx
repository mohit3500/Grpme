import { Search } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import AddIcon from '@mui/icons-material/Add';
import Profile from './Profile';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  flex: 0.23;
  display: flex;
  flex-direction: column;
  background-color: rgba(10, 150, 200, 0.04);
  height: 100vh;
  overflow: auto;
  padding-bottom: 20px;
  border-right: 0.5px solid rgba(10, 150, 200, 0.09);

  &::-webkit-scrollbar {
    width: 10px;
    display: none;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  .chat-container {
    flex: 0.23;
    border-right: 3px solid rgba(10, 150, 200, 0.03);
  }
  .title-container {
    padding: 0px 20px;
    display: flex;
    width: 100%;
    margin-top: 25px;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: context-menu;
  }
  .circle {
    height: 17px;
    width: 17px;
    border: 1.5px dashed gray;
    border-radius: 50%;
    cursor: context-menu;
    margin-right: 12px;
  }
  .search-container {
    height: 7.25vh;
    width: 90%;
    border-radius: 18px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding-left: 10px;
    margin-top: 10px;
    margin-left: 15px;
    margin-bottom: 5px;
    background-color: rgba(10, 150, 200, 0.07);
  }
  .input-container {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding-left: 5px;
    font-size: 12px;
    color: rgba(10, 150, 200, 1);
    background-color: rgba(10, 150, 200, 0.01);
    letter-spacing: 0.2px;
    &::placeholder {
      color: rgba(10, 150, 200, 1);
    }
  }
  .group-container {
    margin-left: 20px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .group-name {
    font-size: 13px;
    color: rgba(10, 150, 200, 1);
    transition: all 0.4s ease-in-out;
    &:hover {
      scale: 1.03;
    }
  }
  .add-icon {
    transition: all 0.5s ease-in-out;
    &:hover {
      scale: 1.1;
    }
  }
  .chat-title {
    border-top: 1px solid lightgray;
    font-size: 14px;
    margin: 10px 15px;
    padding-top: 10px;
    font-weight: 500;
    color: gray;
    letter-spacing: 0.2px;
    cursor: context-menu;
  }
  .search-fields {
    height: 35%;
    width: 72%;
    background-color: rgba(10, 150, 200, 0.07);
    margin-left: 10%;
    list-style: none;
    display: flex;
    flex-direction: column;
    overflow: auto;
    border-radius: 10px;
    display: none;
    &::-webkit-scrollbar {
      width: 10px;
      display: none;
    }
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
      background: #888;
    }
    margin-bottom: 15px;
  }
  .search-field-list {
    height: 100%;
    margin: 5px;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.3px;
    border-radius: 5px;
    cursor: pointer;
    padding-left: 30px;
    padding-top: 5px;
    margin-top: 5px;
    transition: all 0.4s ease-in-out;
    color: gray;
    &:hover {
      scale: 1.003;
    }
  }
`;

const ChatGroup = () => {
  const [result, setResult] = useState([]);
  const user = localStorage.getItem('userInfo');
  const getChats = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .get(`http://localhost:8000/api/chat`, config)
      .then((response) => {
        setResult(response.data);
      });
  };

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  // const filteredItems = data.filter((user) =>
  //   user.username.toLowerCase().includes(search.toLowerCase())
  // );

  const message = useSelector((state) => state.messages.addedMessage);

  useEffect(() => {
    getChats();
  }, [message]);

  return (
    <Wrapper>
      <div className="title-container">
        <p className="title">Chats</p>
        <div className="circle"></div>
      </div>
      <div className="search-container">
        <Search style={{ fontSize: '24px', color: 'rgba(10, 150, 200, 1)' }} />
        <input
          className="input-container"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FilterListOutlinedIcon
          style={{
            fontSize: '22px',
            marginRight: '15px',
            color: 'gray',
            cursor: 'pointer',
          }}
        />
      </div>
      {/* <div className="search-fields">
        {filteredItems.map((user) => (
          <li key={user._id} className="search-field-list">
            {user.username}
          </li>
        ))}
      </div> */}
      <div className="group-container">
        <div className="group-name">Create New Group</div>
        <AddIcon
          className="add-icon"
          style={{
            marginRight: '30px',
            color: 'rgba(10, 150, 200, 1)',
            fontSize: '22px',
          }}
        />
      </div>
      <p className="chat-title">All Chats</p>
      <div className="profile-container">
        {result.map((res) =>
          res.users[0] === user._id ? (
            <Profile key={res._id} value={res.users[1]} id={res._id} />
          ) : (
            <Profile key={res._id} value={res.users[0]} id={res._id} />
          )
        )}
      </div>
    </Wrapper>
  );
};

export default ChatGroup;
