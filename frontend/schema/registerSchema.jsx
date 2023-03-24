import React from 'react';
import * as yup from 'yup';

const registerSchema = yup.object({
  firstname: yup
    .string()
    .min(2)
    .max(25)
    .required('Please enter your firstname'),
  lastname: yup.string().min(2).max(25).required('Please enter your lastname'),
  username: yup.string().min(5).required('Please enter your username'),
  email: yup.string().email().min(5).required('Please enter your email'),
  password: yup.string().min(5).required('Please enter your password'),
});

export default registerSchema;
