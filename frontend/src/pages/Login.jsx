import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import login from '../images/login4.jpg';

const Wrapper = styled.div`
  .container {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    height: 70%;
    width: 80%;
    background-color: white;
    display: flex;
    justify-content: center;
    border-radius: 10px;
  }
  .modal-right {
    flex: 0.8;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modal-title {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 0.5px;
    margin: 2vh 2.5vw;
    margin-top: 6vh;
  }
  .success {
    font-size: 15px;
    color: green;
    margin-left: 2.5vw;
  }
  .error {
    font-size: 15px;
    color: red;
    margin-left: 2.5vw;
  }
  .input-block {
    margin-block: 6vh;
    margin-inline: auto;

    border-bottom: 1px solid gray;
    height: 25px;
    display: flex;
    align-items: center;
    width: 70%;
  }
  .input-container {
    outline: none;
    width: 100%;
    border: none;
    margin-left: 7.5px;
    font-size: 12px;
  }
  .button-block {
    margin: 3vh 2.5vw;
  }
  .input-button {
    height: 7vh;
    font-size: 15px;
    font-weight: 500;
    width: 50%;
    color: white;
    background-color: rgba(10, 150, 200, 0.8);
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }
  .input-button:hover {
    font-size: 15.5px;
    background-color: rgba(10, 150, 200, 1);
    border-radius: 7px;
    scale: 1.01;
  }
  .modal-left {
    flex: 0.5;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .forget-password {
    margin: 5vh 2.5vw;
  }

  .img {
    width: 350px;
    height: 300px;
  }
  @media (min-width: 768px) {
    .modal {
      width: 70%;
    }
    .modal-left {
      display: flex;
    }
    .modal-right {
      flex: 0.5;
    }
  }

  @media (min-width: 900px) {
    .modal {
      width: 60%;
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(null);
  const [err, setErr] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = { email, password };

    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    await axios
      .post('http://localhost:8000/api/login', values, config)
      .then((response) => {
        setSuccess(response.data.message);
        setErr(null);
        setEmail('');
        setPassword('');
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userInfo', JSON.stringify(response.data.user));
      })
      .catch((error) => {
        setErr(error.response.data);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/chats');
    }
  });

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-left">
              <div className="sign-up">
                <img src={login} alt="" className="img" />
                <p>
                  Create an account? <a href="#">Sign Up now</a>
                </p>
              </div>
            </div>
            <div className="modal-right">
              <p className="modal-title">Sign In</p>
              {err ? <p className="error">{err}</p> : null}
              {success ? <p className="success">{success}</p> : null}
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <MailOutlineOutlinedIcon style={{ fontSize: '18px' }} />
                  <input
                    className="input-container"
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <LockOutlinedIcon style={{ fontSize: '18px' }} />
                  <input
                    className="input-container"
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="button-block">
                  <button className="input-button" type="submit">
                    Log In
                  </button>
                </div>
                <div className="forget-password">
                  <p>
                    Forget Password? <a href="#">Recover now</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Login;
