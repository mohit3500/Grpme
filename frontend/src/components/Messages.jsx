import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 3px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: flex-end;
  align-items: flex-end;
  .profile-icon-container {
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.4s ease-in-out;
    margin-bottom: 2.5px;
    margin-left: 5px;
    &:hover {
      scale: 1.05;
      color: white;
    }
  }
  .profile-icon {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
  .message-container {
    font-size: 15px;
    font-weight: 400;
    display: flex;
    position: relative;
  }
  .message-own-container {
    font-size: 15px;
    font-weight: 400;
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: flex-end;
  }
  .message {
    max-width: 25vw;
    word-wrap: break-word;
    cursor: pointer;
    background-color: rgba(10, 150, 200, 0.4);
    padding: 7.5px;
    border-radius: 1px 17px 17px 17px;
    transition: all 0.5s ease-in-out;
    &:hover {
      scale: 1.005;
    }
    position: absolute;
    left: 50px;
  }
  .message-own {
    max-width: 25vw;
    word-wrap: break-word;
    cursor: pointer;
    background-color: rgba(10, 150, 200, 0.4);
    padding: 7.5px;
    border-radius: 17px 1px 17px 17px;
    transition: all 0.5s ease-in-out;
    &:hover {
      scale: 1.005;
    }
  }
`;


const Messages = ({ sender, content }) => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const own = sender === user._id;

  return (
    <Wrapper>
      <div className={own ? 'message-own-container' : 'message-container'}>
        <p className={own ? 'message-own' : 'message'}>{content}</p>

        <div className="profile-container">
          <div className="profile-icon-container">
            <img
              src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
              alt=""
              className="profile-icon"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Messages;
