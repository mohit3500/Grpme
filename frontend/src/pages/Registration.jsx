import React, { useEffect } from 'react';
import styled from 'styled-components';
import Face6OutlinedIcon from '@mui/icons-material/Face6Outlined';
import FaceRetouchingNaturalOutlinedIcon from '@mui/icons-material/FaceRetouchingNaturalOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik';
import registerSchema from '../../schema/registerSchema';

import axios from 'axios';
import { useState } from 'react';

import registration from '../images/registration.jpg';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  username: '',
  email: '',
  password: '',
  firstname: '',
  lastname: '',
};

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
    height: 85%;
    width: 80%;
    background-color: white;
    display: flex;
    justify-content: center;
    border-radius: 10px;
  }
  .modal-left {
    flex: 0.8;
    display: flex;
    flex-direction: column;
  }
  .modal-title {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 0.5px;
    margin: 2vh 5vw;
    margin-top: 6vh;
  }
  .success {
    font-size: 15px;
    color: green;
    margin-left: 5vw;
  }
  .error {
    font-size: 15px;
    color: red;
    margin-left: 5vw;
  }
  .input-block {
    margin: 6vh 5vw;
    border-bottom: 1px solid gray;
    height: 25px;
    display: flex;
    flex-direction: column;
  }
  .input-block-container {
    display: flex;
    align-items: center;
    margin-left: 2.5px;
  }
  .form-error {
    font-size: 0.85rem;
    color: #b22b27;
    margin-top: 3px;
  }
  .input-container {
    outline: none;
    width: 100%;
    border: none;
    margin-left: 7.5px;
    font-size: 12px;
  }
  .button-block {
    margin: 3vh 5vw;
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
    scale: 1;
  }
  .modal-right {
    margin-right: 0.5rem;
    flex: 0.5;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img {
    width: 320px;
    height: 320px;
  }
  @media (min-width: 880px) {
    .modal {
      width: 70%;
    }

    .modal-right {
      display: flex;
    }
    .modal-left {
      flex: 0.7;
    }
  }

  @media (min-width: 1000px) {
    .modal {
      width: 60%;
    }
  }
`;

const Registration = () => {
  const [success, setSuccess] = useState(null);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: async (values, action) => {
        await axios
          .post('http://localhost:8000/api/register', values)
          .then((response) => {
            setSuccess(response.data.message);
            setErr(null);
          })
          .catch((error) => {
            setErr(error.response.data);
          });
        action.resetForm();
        localStorage.setItem('token', response.data.token);
        setTimeout(() => {
          navigate('/chats');
        });
      },
    });
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-left">
              <p className="modal-title">Register</p>
              {success && <p className="success">{success}</p>}
              {err && <p className="error">{err}</p>}
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <div className="input-block-container">
                    <Face6OutlinedIcon style={{ fontSize: '18px' }} />
                    <input
                      className="input-container"
                      type="name"
                      name="firstname"
                      autoComplete="off"
                      placeholder="Your First Name"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.firstname && touched.firstname ? (
                    <p className="form-error">{errors.firstname}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <div className="input-block-container">
                    <FaceRetouchingNaturalOutlinedIcon
                      style={{ fontSize: '18px' }}
                    />
                    <input
                      className="input-container"
                      type="name"
                      name="lastname"
                      autoComplete="off"
                      placeholder="Your Last Name"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.lastname && touched.lastname ? (
                    <p className="form-error">{errors.lastname}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <div className="input-block-container">
                    <PersonOutlineRoundedIcon style={{ fontSize: '18px' }} />
                    <input
                      className="input-container"
                      type="name"
                      name="username"
                      autoComplete="off"
                      placeholder="Username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.username && touched.username ? (
                    <p className="form-error">{errors.username}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <div className="input-block-container">
                    <MailOutlineOutlinedIcon style={{ fontSize: '18px' }} />
                    <input
                      className="input-container"
                      type="email"
                      name="email"
                      autoComplete="off"
                      placeholder="Your Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <p className="form-error">{errors.email}</p>
                  ) : null}
                </div>
                <div className="input-block">
                  <div className="input-block-container">
                    <LockOutlinedIcon style={{ fontSize: '18px' }} />
                    <input
                      className="input-container"
                      type="password"
                      name="password"
                      autoComplete="off"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.password && touched.password ? (
                    <p className="form-error">{errors.password}</p>
                  ) : null}
                </div>
                <div className="button-block">
                  <button className="input-button" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-right">
              <img src={registration} alt="" className="img" />
              <p className="sign-up">
                Already have an account? <a href="#">Sign In now</a>
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Registration;
