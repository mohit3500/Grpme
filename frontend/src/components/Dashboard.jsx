import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import image from '../images/output-onlinepngtools.png';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.06;
  background-color: rgba(10, 150, 200, 0.12);
  height: 100vh;
  align-items: center;
  position: relative;
  border-right: 0.5px solid rgba(10, 150, 200, 0.2);

  .logo-container {
    margin-top: 20px;
    width: 45px;
    height: 45px;
    border-radius: 5px;
    background-color: rgba(10, 150, 200, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
      scale: 1.1;
      border-radius: 8px;
    }
  }
  .logo {
    height: 30px;
    width: 30px;
  }

  .widgets-container {
    margin: 25px 0;
    border-bottom: 1.5px solid gray;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .widgets {
    margin: 15px 0px;
    cursor: pointer;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.4s ease-in-out;
    &:hover {
      background-color: rgba(10, 150, 200, 1);
      scale: 1.1;
      color: white;
    }
    &:active {
      background-color: rgba(10, 150, 200, 1);
      scale: 1.1;
      color: white;
    }
  }
  .setting-widget {
    cursor: pointer;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.4s ease-in-out;
    &:hover {
      background-color: rgba(10, 150, 200, 1);
      scale: 1.1;
      color: white;
    }
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
    position: absolute;
    bottom: 20px;
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
  .no-image {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: rgba(10, 150, 200, 0.12);
  }
`;

const Dashboard = () => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setResult(userInfo);
    setLoading(false);
  }, []);

  return (
    <Wrapper>
      <div className="logo-container">
        <img src={image} alt="" className="logo" />
      </div>
      <div className="widgets-container">
        <div className="widgets ">
          <MapsUgcOutlinedIcon style={{ fontSize: '20px' }} />
        </div>
        <div className="widgets">
          <GroupsOutlinedIcon style={{ fontSize: '20px' }} />
        </div>
        <div className="widgets">
          <PhoneOutlinedIcon style={{ fontSize: '20px' }} />
        </div>
      </div>
      <div className="setting-widget">
        <SettingsOutlinedIcon style={{ fontSize: '20px' }} />
      </div>
      <div className="profile-icon-container">
        {loading ? (
          <div className="no-image"></div>
        ) : (
          <img src={result.pic} className="profile-icon" />
        )}
      </div>
    </Wrapper>
  );
};

export default Dashboard;
